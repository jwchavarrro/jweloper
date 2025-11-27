import { render, screen } from "@testing-library/react";
import { Badge } from "../index";

// Mock de @iconify/react
jest.mock("@iconify/react", () => ({
  Icon: ({
    icon,
    className,
    style,
  }: {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
  }) => (
    <span
      data-testid="icon"
      data-icon={icon}
      className={className}
      style={style}
    >
      {icon}
    </span>
  ),
}));

describe("Badge", () => {
  it("should render the Badge component with text", () => {
    render(<Badge text="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("should render with icon when provided", () => {
    render(<Badge text="React" icon="mdi:react" />);
    expect(screen.getByText("React")).toBeInTheDocument();
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-icon", "mdi:react");
  });

  it("should not render icon when not provided", () => {
    render(<Badge text="JavaScript" />);
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("should apply default variant", () => {
    const { container } = render(<Badge text="Test" />);
    const badge = container.querySelector('[data-slot="badge-icon"]');
    expect(badge).toBeInTheDocument();
  });

  it("should apply custom variant", () => {
    const { container } = render(<Badge text="Test" variant="outline" />);
    const badge = container.querySelector('[data-slot="badge-icon"]');
    expect(badge).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <Badge text="Test" className="custom-class" />
    );
    const badge = container.querySelector('[data-slot="badge-icon"]');
    expect(badge).toHaveClass("custom-class");
  });

  it("should apply iconSize when provided", () => {
    render(<Badge text="Test" icon="mdi:test" iconSize="2rem" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveStyle({
      fontSize: "2rem",
      width: "2rem",
      height: "2rem",
    });
  });

  it("should render with secondary variant", () => {
    const { container } = render(<Badge text="Test" variant="secondary" />);
    const badge = container.querySelector('[data-slot="badge-icon"]');
    expect(badge).toBeInTheDocument();
  });

  it("should render with destructive variant", () => {
    const { container } = render(<Badge text="Test" variant="destructive" />);
    const badge = container.querySelector('[data-slot="badge-icon"]');
    expect(badge).toBeInTheDocument();
  });
});
