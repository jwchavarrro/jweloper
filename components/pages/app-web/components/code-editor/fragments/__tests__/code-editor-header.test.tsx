/**
 * @file code-editor-header.test.tsx
 * @description Tests para el fragmento CodeEditorHeader.
 */

import { render, screen } from "@testing-library/react";
import { CodeEditorHeader } from "../code-editor-header";

describe("CodeEditorHeader", () => {
  it("should render the header", () => {
    render(<CodeEditorHeader />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should render menu items", () => {
    render(<CodeEditorHeader />);
    // Verificar que al menos un item del menú está presente
    const menuItems = screen.getAllByText(/File|Edit|View|Go|Run|Terminal|Help/i);
    expect(menuItems.length).toBeGreaterThan(0);
  });

  it("should render window control buttons", () => {
    const { container } = render(<CodeEditorHeader />);
    // Los botones de control tienen colores específicos
    const buttons = container.querySelectorAll(".w-3.h-3.rounded-full");
    expect(buttons.length).toBe(3);
  });

  it("should have correct styling classes", () => {
    const { container } = render(<CodeEditorHeader />);
    const header = container.querySelector("header");
    expect(header).toHaveClass("flex", "items-center", "justify-between");
  });
});

