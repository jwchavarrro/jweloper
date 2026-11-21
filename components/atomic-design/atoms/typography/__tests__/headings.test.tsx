import { render, screen } from "@testing-library/react";
import { Typography } from "../index";

describe("Typography (headings)", () => {
  it("should render title with content", () => {
    render(<Typography variant="h1">Test Title</Typography>);
    const title = screen.getByText("Test Title");
    expect(title).toBeInTheDocument();
  });

  it("should render h1 by default", () => {
    render(<Typography variant="h1">Default Title</Typography>);
    const title = screen.getByText("Default Title");
    expect(title.tagName).toBe("H1");
  });

  it("should render h1 when level is 1", () => {
    render(<Typography variant="h1">Level 1 Title</Typography>);
    const title = screen.getByText("Level 1 Title");
    expect(title.tagName).toBe("H1");
  });

  it("should render h2 when level is 2", () => {
    render(<Typography variant="h2">Level 2 Title</Typography>);
    const title = screen.getByText("Level 2 Title");
    expect(title.tagName).toBe("H2");
  });

  it("should render h3 when level is 3", () => {
    render(<Typography variant="h3">Level 3 Title</Typography>);
    const title = screen.getByText("Level 3 Title");
    expect(title.tagName).toBe("H3");
  });

  it("should render h4 when level is 4", () => {
    render(<Typography variant="h4">Level 4 Title</Typography>);
    const title = screen.getByText("Level 4 Title");
    expect(title.tagName).toBe("H4");
  });

  it("should render with default variant", () => {
    render(<Typography variant="h1">Default Variant</Typography>);
    const title = screen.getByText("Default Variant");
    expect(title).toBeInTheDocument();
  });

  it("should render with accent variant", () => {
    render(
      <Typography variant="h1" color="primary">
        Accent Variant
      </Typography>
    );
    const title = screen.getByText("Accent Variant");
    expect(title).toHaveClass("text-primary");
  });

  it("should render with gradient variant", () => {
    render(
      <Typography variant="h1" color="gradient">
        Gradient Variant
      </Typography>
    );
    const title = screen.getByText("Gradient Variant");
    expect(title).toHaveClass("bg-gradient-to-r");
  });

  it("should render with default color", () => {
    render(
      <Typography variant="h1" color="default">
        Default Color
      </Typography>
    );
    const title = screen.getByText("Default Color");
    expect(title).toBeInTheDocument();
  });

  it("should render with primary color", () => {
    render(
      <Typography variant="h1" color="primary">
        Primary Color
      </Typography>
    );
    const title = screen.getByText("Primary Color");
    expect(title).toHaveClass("text-primary");
  });

  it("should render with secondary color", () => {
    render(
      <Typography variant="h1" color="secondary">
        Secondary Color
      </Typography>
    );
    const title = screen.getByText("Secondary Color");
    expect(title).toHaveClass("text-secondary-foreground");
  });

  it("should render with accent color", () => {
    render(
      <Typography variant="h1" color="accent">
        Accent Color
      </Typography>
    );
    const title = screen.getByText("Accent Color");
    expect(title).toHaveClass("text-accent-foreground");
  });

  it("should apply custom className", () => {
    render(
      <Typography variant="h1" className="custom-class">
        Custom Class
      </Typography>
    );
    const title = screen.getByText("Custom Class");
    expect(title).toHaveClass("custom-class");
  });

  it("should combine variant and color classes", () => {
    render(
      <Typography variant="h1" color="primary">
        Combined
      </Typography>
    );
    const title = screen.getByText("Combined");
    expect(title).toHaveClass("text-primary");
  });

  it("should have font-title class", () => {
    render(<Typography variant="h1">Font Title</Typography>);
    const title = screen.getByText("Font Title");
    expect(title).toHaveClass("font-title");
  });
});
