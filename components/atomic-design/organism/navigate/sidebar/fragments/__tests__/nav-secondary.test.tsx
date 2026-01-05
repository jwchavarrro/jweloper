import { screen } from "@testing-library/react";
import { NavSecondary } from "../nav-secondary";
import { renderWithProvider } from "../../__mocks__/test-utils";

describe("NavSecondary", () => {
  it("should render NavSecondary with language text", () => {
    renderWithProvider(<NavSecondary />);

    // El componente muestra "Español" o "English" según el locale
    const languageText = screen.getByText(/Español|English/i);
    expect(languageText).toBeInTheDocument();
  });

  it("should render Languages icon", () => {
    const { container } = renderWithProvider(<NavSecondary />);

    const languagesIcon = container.querySelector(".lucide-languages");
    expect(languagesIcon).toBeInTheDocument();
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
    const menu = container.querySelector('[data-slot="sidebar-menu"]');

    expect(group).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
  });
});
