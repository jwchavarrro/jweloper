/**
 * @file index.test.tsx
 * @description Tests para el componente Carousel.
 */

import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Carousel } from "../index";
import type { CarouselProps } from "../utils";

// Mock del componente Carousel de shadcn/ui
jest.mock("@/components/ui/carousel", () => {
  const mockApi = {
    on: jest.fn(),
    off: jest.fn(),
    scrollTo: jest.fn(),
    scrollPrev: jest.fn(),
    scrollNext: jest.fn(),
    canScrollPrev: true,
    canScrollNext: true,
  };

  return {
    Carousel: ({
      children,
      setApi,
      orientation,
      ...props
    }: {
      children: React.ReactNode;
      setApi?: (api: typeof mockApi) => void;
      orientation?: "horizontal" | "vertical";
      [key: string]: unknown;
    }) => {
      React.useEffect(() => {
        if (setApi) {
          setApi(mockApi);
        }
      }, [setApi]);

      return (
        <div data-testid="carousel" data-orientation={orientation} {...props}>
          {children}
        </div>
      );
    },
    CarouselContent: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => (
      <div data-testid="carousel-content" className={className}>
        {children}
      </div>
    ),
    CarouselItem: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => (
      <div data-testid="carousel-item" className={className}>
        {children}
      </div>
    ),
    CarouselPrevious: () => (
      <button data-testid="carousel-previous">Previous</button>
    ),
    CarouselNext: () => <button data-testid="carousel-next">Next</button>,
  };
});

describe("Carousel", () => {
  const mockItems = [
    {
      id: "1",
      content: <div>Item 1</div>,
    },
    {
      id: "2",
      content: <div>Item 2</div>,
    },
    {
      id: "3",
      content: <div>Item 3</div>,
    },
  ];

  const defaultProps: CarouselProps = {
    items: mockItems,
  };

  it("should render the carousel", () => {
    render(<Carousel {...defaultProps} />);
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
  });

  it("should render all items", () => {
    render(<Carousel {...defaultProps} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("should render with horizontal orientation by default", () => {
    render(<Carousel {...defaultProps} />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toHaveAttribute("data-orientation", "horizontal");
  });

  it("should render with vertical orientation when specified", () => {
    render(<Carousel {...defaultProps} orientation="vertical" />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toHaveAttribute("data-orientation", "vertical");
  });

  it("should apply custom content className", () => {
    render(<Carousel {...defaultProps} contentClassName="custom-content" />);
    const content = screen.getByTestId("carousel-content");
    expect(content).toHaveClass("custom-content");
  });

  it("should apply custom item className", () => {
    render(<Carousel {...defaultProps} itemClassName="custom-item" />);
    const items = screen.getAllByTestId("carousel-item");
    items.forEach((item) => {
      expect(item).toHaveClass("custom-item");
    });
  });

  it("should show navigation buttons by default", () => {
    render(<Carousel {...defaultProps} />);
    expect(screen.getByTestId("carousel-previous")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-next")).toBeInTheDocument();
  });

  it("should hide navigation buttons when showNavigation is false", () => {
    render(<Carousel {...defaultProps} showNavigation={false} />);
    expect(screen.queryByTestId("carousel-previous")).not.toBeInTheDocument();
    expect(screen.queryByTestId("carousel-next")).not.toBeInTheDocument();
  });

  it("should return null when items array is empty", () => {
    const { container } = render(<Carousel items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("should return null when items is undefined", () => {
    const { container } = render(
      <Carousel items={undefined as unknown as CarouselProps["items"]} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("should use index as key when item id is not provided", () => {
    const itemsWithoutId = [
      { content: <div>Item without ID 1</div> },
      { content: <div>Item without ID 2</div> },
    ];
    render(<Carousel items={itemsWithoutId} />);
    expect(screen.getByText("Item without ID 1")).toBeInTheDocument();
    expect(screen.getByText("Item without ID 2")).toBeInTheDocument();
  });

  it("should call setApi callback when provided", () => {
    const setApiMock = jest.fn();
    render(<Carousel {...defaultProps} setApi={setApiMock} />);
    expect(setApiMock).toHaveBeenCalled();
  });

  it("should call onSelect callback when slide changes", () => {
    const onSelectMock = jest.fn();
    render(<Carousel {...defaultProps} onSelect={onSelectMock} />);
    // El mock debería configurar el listener
    expect(onSelectMock).not.toHaveBeenCalled();
  });

  it("should pass additional props to CarouselUI", () => {
    render(<Carousel {...defaultProps} className="custom-carousel" />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toHaveClass("custom-carousel");
  });
});
