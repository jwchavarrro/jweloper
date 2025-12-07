/**
 * @file index.test.tsx
 * @description Tests para el componente AppWebV1
 */

import { render, screen } from "@testing-library/react";
import { AppWebV1 } from "../index";

// Mock de los componentes
jest.mock("@/components/atomic-design/atoms", () => ({
  Title: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <h1 className={className}>{children}</h1>,
  Text: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
}));

jest.mock("@iconify/react", () => ({
  Icon: ({ icon, className }: { icon: string; className?: string }) => (
    <svg data-testid={`icon-${icon}`} className={className} />
  ),
}));

jest.mock("@/app/utils", () => ({
  SOCIAL_MEDIA: [
    { name: "GitHub", url: "https://github.com", icon: "mdi:github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "mdi:linkedin" },
  ],
}));

describe("AppWebV1", () => {
  it("should render AppWebV1 component", () => {
    const { container } = render(<AppWebV1 />);
    expect(container).toBeInTheDocument();
  });

  it("should render the main grid container", () => {
    const { container } = render(<AppWebV1 />);
    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass("grid-cols-1", "md:grid-cols-2");
  });

  it("should render the title", () => {
    render(<AppWebV1 />);
    expect(screen.getByText("John Chavarro Urrea")).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    render(<AppWebV1 />);
    expect(screen.getByText("Desarrollador Frontend")).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    render(<AppWebV1 />);
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
    expect(screen.getByText("EXPERIENCE")).toBeInTheDocument();
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
  });

  it("should render social media icons", () => {
    render(<AppWebV1 />);
    expect(screen.getByTestId("icon-mdi:github")).toBeInTheDocument();
    expect(screen.getByTestId("icon-mdi:linkedin")).toBeInTheDocument();
  });

  it("should have sticky column for content", () => {
    const { container } = render(<AppWebV1 />);
    const stickyColumn = container.querySelector(".sticky");
    expect(stickyColumn).toBeInTheDocument();
    expect(stickyColumn).toHaveClass("top-0");
  });

  it("should have scrollable column for text content", () => {
    const { container } = render(<AppWebV1 />);
    const scrollableColumn = container.querySelector(".overflow-y-auto");
    expect(scrollableColumn).toBeInTheDocument();
  });
});
