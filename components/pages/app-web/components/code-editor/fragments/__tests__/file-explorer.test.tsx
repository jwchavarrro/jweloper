/**
 * @file file-explorer.test.tsx
 * @description Tests para el fragmento FileExplorer.
 */

import { render, screen } from "@testing-library/react";
import { FileCodeIcon } from "lucide-react";
import type { FileItem } from "../../utils/types";
import { FileExplorer } from "../file-explorer";

describe("FileExplorer", () => {
  const mockFiles: FileItem[] = [
    {
      name: "test.json",
      content: '{"test": "value"}',
      language: "json",
      icon: <FileCodeIcon className="size-3 text-green-400" />,
    },
    {
      name: "example.json",
      content: '{"example": "data"}',
      language: "json",
    },
  ];

  it("should render the file explorer", () => {
    render(<FileExplorer files={mockFiles} />);
    expect(screen.getByText("Explorador")).toBeInTheDocument();
  });

  it("should render all files", () => {
    render(<FileExplorer files={mockFiles} />);
    expect(screen.getByText("test.json")).toBeInTheDocument();
    expect(screen.getByText("example.json")).toBeInTheDocument();
  });

  it("should render the folder structure", () => {
    render(<FileExplorer files={mockFiles} />);
    expect(screen.getByText("src")).toBeInTheDocument();
  });

  it("should render empty state when no files", () => {
    render(<FileExplorer files={[]} />);
    expect(screen.getByText("Explorador")).toBeInTheDocument();
  });

  it("should display file icons when provided", () => {
    const { container } = render(<FileExplorer files={mockFiles} />);
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBeGreaterThan(0);
  });
});

