import { render, screen } from "@testing-library/react";
import { MoveUpIcon } from "lucide-react";
import { ScrollIndicator } from "../index";

describe("ScrollIndicator", () => {
  it("should render the ScrollIndicator component", () => {
    render(<ScrollIndicator />);
    const text = screen.getByText("Scroll abajo");
    expect(text).toBeInTheDocument();
  });

  it("should render with custom text", () => {
    render(<ScrollIndicator text="Scroll arriba" />);
    expect(screen.getByText("Scroll arriba")).toBeInTheDocument();
    expect(screen.queryByText("Scroll abajo")).not.toBeInTheDocument();
  });

  it("should render with default MoveDownIcon", () => {
    const { container } = render(<ScrollIndicator />);
    const icon = container.querySelector(".lucide-move-down");
    expect(icon).toBeInTheDocument();
  });

  it("should render with custom icon", () => {
    const { container } = render(<ScrollIndicator icon={MoveUpIcon} />);
    const icon = container.querySelector(".lucide-move-up");
    expect(icon).toBeInTheDocument();
  });

  it("should render text before icon by default", () => {
    const { container } = render(<ScrollIndicator />);
    const text = screen.getByText("Scroll abajo");
    const icon = container.querySelector("svg");
    const textContainer = text.parentElement;
    // El texto debe estar después del div de la línea
    expect(textContainer).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    // Verificar que el icono está después del texto
    const children = Array.from(textContainer?.children || []);
    const textIndex = children.indexOf(text);
    const iconIndex = children.indexOf(icon!);
    expect(iconIndex).toBeGreaterThan(textIndex);
  });

  it("should render icon before text when reverse is true", () => {
    const { container } = render(<ScrollIndicator reverse />);
    const text = screen.getByText("Scroll abajo");
    const icon = container.querySelector("svg");
    const textContainer = text.parentElement;
    expect(textContainer).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    // Verificar que el icono está antes del texto
    const children = Array.from(textContainer?.children || []);
    const iconIndex = children.indexOf(icon!);
    const textIndex = children.indexOf(text);
    expect(iconIndex).toBeLessThan(textIndex);
  });

  it("should apply custom className", () => {
    const { container } = render(<ScrollIndicator className="custom-class" />);
    const wrapper = container.querySelector(".custom-class");
    expect(wrapper).toBeInTheDocument();
  });

  it("should apply custom textClassName", () => {
    render(<ScrollIndicator textClassName="custom-text" />);
    const text = screen.getByText("Scroll abajo");
    expect(text).toHaveClass("custom-text");
  });

  it("should apply custom iconClassName", () => {
    const { container } = render(
      <ScrollIndicator iconClassName="custom-icon" />
    );
    const icon = container.querySelector("svg");
    expect(icon).toHaveClass("custom-icon");
  });

  it("should have animate-bounce class on icon", () => {
    const { container } = render(<ScrollIndicator />);
    const icon = container.querySelector("svg");
    expect(icon).toHaveClass("animate-bounce");
  });
});
