import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GlassCarousel } from "../index";

const mockScrollPrev = jest.fn();
const mockScrollNext = jest.fn();

// Embla no funciona en jsdom: el carrusel entrega una API falsa vía setApi
jest.mock("@/components/ui/carousel", () => {
  const React = jest.requireActual("react");
  return {
    Carousel: ({
      children,
      setApi,
    }: {
      children: React.ReactNode;
      setApi?: (api: unknown) => void;
    }) => {
      React.useEffect(() => {
        setApi?.({ scrollPrev: mockScrollPrev, scrollNext: mockScrollNext });
      }, [setApi]);
      return <div data-testid="carousel">{children}</div>;
    },
    CarouselContent: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    CarouselItem: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="carousel-item">{children}</div>
    ),
  };
});

const ITEMS = [
  { id: "a", content: <p>Item A</p> },
  { id: "b", content: <p>Item B</p> },
];

describe("GlassCarousel", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render every item", () => {
    render(
      <GlassCarousel
        items={ITEMS}
        previousLabel="Anterior"
        nextLabel="Siguiente"
      />
    );
    expect(screen.getAllByTestId("carousel-item")).toHaveLength(2);
    expect(screen.getByText("Item A")).toBeInTheDocument();
    expect(screen.getByText("Item B")).toBeInTheDocument();
  });

  it("should scroll with the labelled controls", async () => {
    const user = userEvent.setup();
    render(
      <GlassCarousel
        items={ITEMS}
        previousLabel="Anterior"
        nextLabel="Siguiente"
      />
    );

    await user.click(screen.getByRole("button", { name: "Anterior" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    expect(mockScrollPrev).toHaveBeenCalledTimes(1);
    expect(mockScrollNext).toHaveBeenCalledTimes(1);
  });

  it("should render nothing without items", () => {
    const { container } = render(
      <GlassCarousel
        items={[]}
        previousLabel="Anterior"
        nextLabel="Siguiente"
      />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
