/**
 * @file project-item.test.tsx
 * @description Tests para el componente ProjectItem.
 */

import { render, screen } from "@testing-library/react";
import { ProjectItem } from "../project-item";
import type { ProjectItemData } from "@/components/pages/app-web";

// Mock del hook useIsMobile
jest.mock("@/hooks", () => ({
  useIsMobile: jest.fn(() => false),
}));

// Mock de motion
jest.mock("motion/react", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      whileHover?: unknown;
      transition?: unknown;
    }) => {
      // Remover props de motion que no son válidas para DOM
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { whileHover, transition, ...domProps } = props;
      return <div {...domProps}>{children}</div>;
    },
  },
}));

describe("ProjectItem", () => {
  const mockProject: ProjectItemData = {
    name: "Test Project",
    description: "This is a test project description",
    image: "/test-image.png",
    url: "https://example.com",
  };

  it("should render the project item", () => {
    render(<ProjectItem project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("should display project name", () => {
    render(<ProjectItem project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("should display project description in JSON format", () => {
    render(<ProjectItem project={mockProject} />);
    expect(
      screen.getByText(/This is a test project description/)
    ).toBeInTheDocument();
  });

  it("should display project URL in JSON format", () => {
    render(<ProjectItem project={mockProject} />);
    expect(screen.getByText(/https:\/\/example\.com/)).toBeInTheDocument();
  });

  it("should render window control buttons (red, yellow, green)", () => {
    const { container } = render(<ProjectItem project={mockProject} />);
    const buttons = container.querySelectorAll(".h-3.w-3.rounded-full");
    expect(buttons.length).toBe(3);
  });

  it("should have correct styling classes", () => {
    const { container } = render(<ProjectItem project={mockProject} />);
    const card = container.querySelector(".bg-\\[\\#232a33\\]");
    expect(card).toBeInTheDocument();
  });

  it("should render JSON code block", () => {
    const { container } = render(<ProjectItem project={mockProject} />);
    const preElement = container.querySelector("pre");
    expect(preElement).toBeInTheDocument();
    expect(preElement?.textContent).toContain("Test Project");
    expect(preElement?.textContent).toContain(
      "This is a test project description"
    );
  });
});
