import { render, screen } from "@testing-library/react";
import { Typography } from "../index";

describe("Typography (text)", () => {
  it("should render text with content", () => {
    render(<Typography>Texto de prueba</Typography>);
    const text = screen.getByText("Texto de prueba");
    expect(text).toBeInTheDocument();
  });

  it("should render paragraph by default", () => {
    render(<Typography>Default Text</Typography>);
    const text = screen.getByText("Default Text");
    expect(text.tagName).toBe("P");
  });

  it("should render with p variant", () => {
    render(<Typography variant="p">Paragraph Text</Typography>);
    const text = screen.getByText("Paragraph Text");
    expect(text.tagName).toBe("P");
  });

  it("should render with lead variant", () => {
    render(<Typography variant="lead">Lead Text</Typography>);
    const text = screen.getByText("Lead Text");
    expect(text.tagName).toBe("P");
    expect(text).toBeInTheDocument();
  });

  it("should render with large variant", () => {
    render(<Typography variant="large">Large Text</Typography>);
    const text = screen.getByText("Large Text");
    expect(text.tagName).toBe("DIV");
  });

  it("should render with small variant", () => {
    render(<Typography variant="small">Small Text</Typography>);
    const text = screen.getByText("Small Text");
    expect(text.tagName).toBe("SMALL");
  });

  it("should render with muted variant", () => {
    render(<Typography variant="muted">Muted Text</Typography>);
    const text = screen.getByText("Muted Text");
    expect(text.tagName).toBe("P");
    expect(text).toBeInTheDocument();
  });

  it("should render with default color", () => {
    render(<Typography color="default">Default Color</Typography>);
    const text = screen.getByText("Default Color");
    expect(text).toBeInTheDocument();
  });

  it("should render with primary color", () => {
    render(<Typography color="primary">Primary Color</Typography>);
    const text = screen.getByText("Primary Color");
    expect(text).toHaveClass("text-primary");
  });

  it("should render with secondary color", () => {
    render(<Typography color="secondary">Secondary Color</Typography>);
    const text = screen.getByText("Secondary Color");
    expect(text).toHaveClass("text-secondary-foreground");
  });

  it("should render with accent color", () => {
    render(<Typography color="accent">Accent Color</Typography>);
    const text = screen.getByText("Accent Color");
    expect(text).toHaveClass("text-accent-foreground");
  });

  it("should accept custom className", () => {
    render(<Typography className="custom-class">Custom Text</Typography>);
    const text = screen.getByText("Custom Text");
    expect(text).toHaveClass("custom-class");
  });

  it("should combine variant and color", () => {
    render(
      <Typography variant="lead" color="primary">
        Combined Text
      </Typography>
    );
    const text = screen.getByText("Combined Text");
    expect(text).toHaveClass("text-primary");
  });

  it("should combine variant, color and className", () => {
    render(
      <Typography variant="muted" color="accent" className="custom-class">
        Full Combined Text
      </Typography>
    );
    const text = screen.getByText("Full Combined Text");
    expect(text).toHaveClass("text-accent-foreground");
    expect(text).toHaveClass("custom-class");
  });

  it("should pass through additional props", () => {
    render(
      <Typography data-testid="custom-text" id="text-1">
        Text with Props
      </Typography>
    );
    const text = screen.getByTestId("custom-text");
    expect(text).toHaveAttribute("id", "text-1");
  });
});
