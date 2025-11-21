import { screen } from "@testing-library/react";
import { NavSecondary } from "../nav-secondary";
import { renderWithProvider } from "../../__mocks__/test-utils";

// Mock reutilizable de getSidebarIcon (función helper en __mocks__/getSidebarIcon.ts)
jest.mock("../../utils", () => ({
  ...jest.requireActual("../../utils"),
  getSidebarIcon: (iconName: string) => {
    const MockIcon = () => <span data-testid={`icon-${iconName}`}>Icon</span>;
    return MockIcon;
  },
}));

const mockItems = [
  {
    title: "Support",
    url: "#",
    icon: "LifeBuoy",
  },
  {
    title: "Feedback",
    url: "#",
    icon: "Send",
  },
];

describe("NavSecondary", () => {
  it("should render NavSecondary with items", () => {
    renderWithProvider(<NavSecondary items={mockItems} />);

    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Feedback")).toBeInTheDocument();
  });

  it("should render items with icons", () => {
    renderWithProvider(<NavSecondary items={mockItems} />);

    expect(screen.getByTestId("icon-LifeBuoy")).toBeInTheDocument();
    expect(screen.getByTestId("icon-Send")).toBeInTheDocument();
  });

  it("should accept additional props", () => {
    const { container } = renderWithProvider(
      <NavSecondary items={mockItems} className="custom-class" />
    );

    const group = container.querySelector('[data-slot="sidebar-group"]');
    expect(group).toHaveClass("custom-class");
  });

  it("should render empty when no items", () => {
    renderWithProvider(<NavSecondary items={[]} />);

    expect(screen.queryByText("Support")).not.toBeInTheDocument();
  });
});
