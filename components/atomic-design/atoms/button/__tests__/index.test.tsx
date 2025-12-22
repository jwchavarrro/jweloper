import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../index";

describe("Button", () => {
  it("should render button with text", () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("should render button with default icon", () => {
    render(<Button text="Button" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    // El icono por defecto debería estar presente (iconify renderiza el icono)
    const iconContainer = button.querySelector(".size-6");
    expect(iconContainer).toBeInTheDocument();
  });

  it("should render button with custom icon", () => {
    const customIcon = "mdi:custom-icon";
    render(<Button text="Button" icon={customIcon} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should handle click events", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button text="Click me" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /click me/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button text="Disabled Button" disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should accept custom className", () => {
    render(<Button text="Custom Button" className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("should pass through additional props", () => {
    render(
      <Button
        text="Button"
        data-testid="custom-button"
        aria-label="Custom label"
      />
    );
    const button = screen.getByTestId("custom-button");
    expect(button).toHaveAttribute("aria-label", "Custom label");
  });

  it("should handle multiple clicks", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button text="Click me" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /click me/i });
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  it("should render with default button classes", () => {
    render(<Button text="Button" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("w-fit");
    expect(button).toHaveClass("rounded-full");
    expect(button).toHaveClass("flex");
    expect(button).toHaveClass("items-center");
    expect(button).toHaveClass("gap-2");
    expect(button).toHaveClass("font-bold");
    expect(button).toHaveClass("border");
  });
});
