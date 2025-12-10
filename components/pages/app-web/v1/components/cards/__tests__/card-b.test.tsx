/**
 * @file card-b.test.tsx
 * @description Tests para el componente CardB
 */

import { render, screen } from "@testing-library/react";
import { CardB } from "../card-b";
import { CardBData } from "@/components/pages/app-web/v1/utils";

// Mock de los componentes
jest.mock("@/components/atomic-design/molecules/card", () => ({
  Card: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-slot="card" className={className}>
      {children}
    </div>
  ),
}));

jest.mock("@/components/atomic-design/atoms", () => ({
  Title: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <h4 className={className}>{children}</h4>,
  Text: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    variant?: string;
    className?: string;
  }) => <p className={className}>{children}</p>,
}));

jest.mock("@/components/atomic-design", () => ({
  Badge: ({ text }: { text: string }) => (
    <span data-testid="badge">{text}</span>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...props} />,
}));

jest.mock("@iconify/react", () => ({
  Icon: ({ icon, className }: { icon: string; className?: string }) => (
    <svg data-testid={`icon-${icon}`} className={className} />
  ),
}));

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("CardB", () => {
  const mockData: CardBData = {
    mainImage: "https://via.placeholder.com/150",
    title: "Test Project",
    url: "https://example.com",
    description: ["Test description"],
    tecnologies: ["React", "TypeScript"],
  };

  it("should render card component", () => {
    render(<CardB data={mockData} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("should render with default styles", () => {
    const { container } = render(<CardB data={mockData} />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass("shadow-transparent");
    expect(card).toHaveClass("border-transparent");
    expect(card).toHaveClass("hover:shadow-md");
    expect(card).toHaveClass("opacity-50");
    expect(card).toHaveClass("p-3");
    expect(card).toHaveClass("group");
  });

  it("should accept custom className", () => {
    const { container } = render(
      <CardB data={mockData} className="custom-class" />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass("custom-class");
  });

  it("should combine default styles with custom className", () => {
    const { container } = render(
      <CardB data={mockData} className="custom-class" />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass("shadow-transparent");
    expect(card).toHaveClass("custom-class");
  });
});
