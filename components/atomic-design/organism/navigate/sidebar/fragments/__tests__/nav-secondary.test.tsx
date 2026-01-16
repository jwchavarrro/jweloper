import { screen } from "@testing-library/react";
import { NavSecondary } from "../nav-secondary";
import { renderWithProvider } from "../../__mocks__/test-utils";

describe("NavSecondary", () => {
  it("should render NavSecondary component", () => {
    const { container } = renderWithProvider(<NavSecondary />);
    const group = container.querySelector('[data-slot="sidebar-group"]');
    expect(group).toBeInTheDocument();
  });

  it("should accept additional props", () => {
    const { container } = renderWithProvider(
      <NavSecondary className="custom-class" />
    );

    const group = container.querySelector('[data-slot="sidebar-group"]');
    expect(group).toHaveClass("custom-class");
  });

  it("should render SidebarGroup structure", () => {
    const { container } = renderWithProvider(<NavSecondary />);

    const group = container.querySelector('[data-slot="sidebar-group"]');
    const content = container.querySelector(
      '[data-slot="sidebar-group-content"]'
    );

    expect(group).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
