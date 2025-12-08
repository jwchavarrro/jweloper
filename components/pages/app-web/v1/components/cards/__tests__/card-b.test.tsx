/**
 * @file card-b.test.tsx
 * @description Tests para el componente CardB
 */

import { render, screen } from "@testing-library/react";
import { CardB } from "../card-b";

// Mock de los componentes
jest.mock("@/components/atomic-design/molecules/card", () => ({
  Card: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div data-slot="card" className={className}>{children}</div>,
}));

describe("CardB", () => {
  it("should render card component", () => {
    render(<CardB />);
    expect(screen.getByText("Card B")).toBeInTheDocument();
  });

  it("should render with default styles", () => {
    const { container } = render(<CardB />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass("shadow-transparent");
    expect(card).toHaveClass("border-transparent");
    expect(card).toHaveClass("hover:shadow-md");
    expect(card).toHaveClass("opacity-50");
    expect(card).toHaveClass("p-3");
    expect(card).toHaveClass("group");
  });

  it("should accept custom className", () => {
    const { container } = render(<CardB className="custom-class" />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass("custom-class");
  });

  it("should combine default styles with custom className", () => {
    const { container } = render(<CardB className="custom-class" />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass("shadow-transparent");
    expect(card).toHaveClass("custom-class");
  });
});

