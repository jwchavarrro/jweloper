/**
 * @file tabs-bar.test.tsx
 * @description Tests para el fragmento TabsBar.
 */

import { render, screen } from "@testing-library/react";
import { FileCodeIcon } from "lucide-react";
import type { FileItem } from "../../utils/types";
import { TabsBar } from "../tabs-bar";

describe("TabsBar", () => {
  const mockFiles: FileItem[] = [
    {
      name: "test.json",
      content: '{"test": "value"}',
      language: "json",
      icon: <FileCodeIcon className="size-4 text-green-400" />,
    },
    {
      name: "example.json",
      content: '{"example": "data"}',
      language: "json",
    },
  ];

  it("should render the tabs bar", () => {
    render(<TabsBar files={mockFiles} />);
    const tabsContainer = screen.getByText("test.json").closest("div");
    expect(tabsContainer).toBeInTheDocument();
  });

  it("should render all file tabs", () => {
    render(<TabsBar files={mockFiles} />);
    expect(screen.getByText("test.json")).toBeInTheDocument();
    expect(screen.getByText("example.json")).toBeInTheDocument();
  });

  it("should render file icons when provided", () => {
    const { container } = render(<TabsBar files={mockFiles} />);
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBeGreaterThan(0);
  });

  it("should render close button (X) for each tab", () => {
    const { container } = render(<TabsBar files={mockFiles} />);
    const closeButtons = container.querySelectorAll("svg");
    // Debería haber al menos un icono X por cada tab
    expect(closeButtons.length).toBeGreaterThanOrEqual(mockFiles.length);
  });

  it("should handle empty files array", () => {
    render(<TabsBar files={[]} />);
    const tabsContainer = screen.queryByText("test.json");
    expect(tabsContainer).not.toBeInTheDocument();
  });

  it("should have correct styling classes", () => {
    const { container } = render(<TabsBar files={mockFiles} />);
    const tabsContainer = container.firstChild;
    expect(tabsContainer).toHaveClass("flex", "items-center");
  });
});
