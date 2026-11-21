import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Section04 } from "../index";
import { makeStore } from "@/store/makeStore";

// Mock de los componentes
jest.mock("@/components/atomic-design/atoms", () => ({
  ...jest.requireActual("@/components/atomic-design/atoms/badge"),
  ...jest.requireActual("@/components/atomic-design/atoms/card"),
  Icon: jest.requireActual("@/components/atomic-design/atoms/icon").Icon,
  Typography: ({
    children,
    className,
    variant = "p",
  }: {
    children: React.ReactNode;
    className?: string;
    variant?: string;
  }) => {
    const Tag = (/^h[1-4]$/.test(variant) ? variant : "p") as "p";
    return <Tag className={className}>{children}</Tag>;
  },
}));

jest.mock("@/components/pages/app-web/components", () => ({
  WordsAnimation: ({
    words,
  }: {
    words: Array<{ name: string; href: string }>;
  }) => (
    <div data-testid="words-animation">
      {words.map((word) => (
        <a key={word.name} href={word.href}>
          {word.name}
        </a>
      ))}
    </div>
  ),
}));

jest.mock("@iconify/react", () => ({
  Icon: ({ icon, className }: { icon: string; className?: string }) => (
    <svg data-testid={`icon-${icon}`} className={className} />
  ),
}));

jest.mock("@/app/utils/constants", () => ({
  SOCIAL_MEDIA: [
    { name: "GitHub", url: "https://github.com", icon: "mdi:github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "mdi:linkedin" },
  ],
}));

// Helper para renderizar con Redux Provider
const renderWithRedux = (component: React.ReactElement) => {
  const store = makeStore();
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Section04", () => {
  it("should render the Section04 component", () => {
    renderWithRedux(<Section04 />);
    const title = screen.getByText(/Contacto/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the main title", () => {
    renderWithRedux(<Section04 />);
    const title = screen.getByText(/Contacto/i);
    expect(title).toBeInTheDocument();
  });

  it("should render within a SnapPage component", () => {
    const { container } = renderWithRedux(<Section04 />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should have correct structure with three columns", () => {
    const { container } = renderWithRedux(<Section04 />);
    // Verificar que hay un grid con tres columnas en xl
    const grid = container.querySelector(".xl\\:grid-cols-3");
    expect(grid).toBeInTheDocument();
  });
});
