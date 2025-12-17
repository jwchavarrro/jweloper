/**
 * @file index.test.tsx
 * @description Tests para el componente WordsAnimation
 */

import { render, screen } from "@testing-library/react";
import { WordsAnimation } from "../index";

// Mock de motion
jest.mock("motion/react", () => ({
  motion: {
    div: ({
      children,
      className,
      initial,
      whileHover,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
      initial?: string;
      whileHover?: string;
      [key: string]: unknown;
    }) => (
      <div
        className={className}
        data-initial={initial}
        data-while-hover={whileHover}
        {...props}
      >
        {children}
      </div>
    ),
  },
}));

// Mock de next/link
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mock de Title
jest.mock("@/components/atomic-design/atoms", () => ({
  Title: ({
    children,
    className,
    level,
  }: {
    children: React.ReactNode;
    className?: string;
    level?: number;
  }) => (
    <h1 className={className} data-level={level}>
      {children}
    </h1>
  ),
}));

describe("WordsAnimation", () => {
  const mockWords = [
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Twitter", href: "https://twitter.com" },
  ];

  it("should render the WordsAnimation component", () => {
    render(<WordsAnimation words={mockWords} />);
    expect(screen.getAllByText("GitHub").length).toBeGreaterThan(0);
    expect(screen.getAllByText("LinkedIn").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Twitter").length).toBeGreaterThan(0);
  });

  it("should render all words as links", () => {
    render(<WordsAnimation words={mockWords} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(mockWords.length * 2); // Cada palabra tiene 2 links (uno para cada motion.div)

    expect(links[0]).toHaveAttribute("href", "https://github.com");
    expect(links[1]).toHaveAttribute("href", "https://github.com");
    expect(links[2]).toHaveAttribute("href", "https://linkedin.com");
    expect(links[3]).toHaveAttribute("href", "https://linkedin.com");
  });

  it("should render links with correct target and rel attributes", () => {
    render(<WordsAnimation words={mockWords} />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("should apply default className", () => {
    const { container } = render(<WordsAnimation words={mockWords} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("flex", "flex-col", "gap-4");
  });

  it("should accept custom className", () => {
    const { container } = render(
      <WordsAnimation words={mockWords} className="custom-class" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("should render empty when words array is empty", () => {
    const { container } = render(<WordsAnimation words={[]} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children).toHaveLength(0);
  });

  it("should render motion divs with correct initial and whileHover props", () => {
    const { container } = render(<WordsAnimation words={mockWords} />);
    const motionDivs = container.querySelectorAll('[data-initial="initial"]');
    expect(motionDivs.length).toBeGreaterThan(0);

    const hoverDivs = container.querySelectorAll(
      '[data-while-hover="hovered"]'
    );
    expect(hoverDivs.length).toBeGreaterThan(0);
  });

  it("should render Title components with correct classes", () => {
    render(<WordsAnimation words={mockWords} />);
    const titles = screen.getAllByRole("heading", { level: 1 });
    titles.forEach((title) => {
      expect(title).toHaveClass(
        "text-4xl!",
        "md:text-6xl!",
        "lg:text-7xl!",
        "2xl:text-9xl!",
        "font-text"
      );
    });
  });

  it("should accept custom classNamesWords", () => {
    render(
      <WordsAnimation words={mockWords} classNamesWords="custom-word-class" />
    );
    const titles = screen.getAllByRole("heading", { level: 1 });
    titles.forEach((title) => {
      expect(title).toHaveClass("custom-word-class");
    });
  });
});
