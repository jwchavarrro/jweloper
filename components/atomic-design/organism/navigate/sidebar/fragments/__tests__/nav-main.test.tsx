import { screen } from "@testing-library/react";
import { NavMain } from "../nav-main";
import { renderWithProvider } from "../../__mocks__/test-utils";
import type { BaseNavItemType } from "../../utils/types";

// Mock reutilizable de getSidebarIcon (función helper en __mocks__/getSidebarIcon.ts)
jest.mock("../../utils", () => ({
  ...jest.requireActual("../../utils"),
  getSidebarIcon: (iconName: string) => {
    const MockIcon = () => <span data-testid={`icon-${iconName}`}>Icon</span>;
    return MockIcon;
  },
}));

const mockItems: BaseNavItemType[] = [
  {
    title: "appWeb",
    url: "/app-web",
    icon: "SquareTerminal",
    isActive: true,
    items: [
      { title: "experience", url: "/app-web/inicio" },
      { title: "projects", url: "/app-web/proyectos" },
    ],
  },
  {
    title: "iaChat",
    url: "/ia-chat",
    icon: "Bot",
  },
];

describe("NavMain", () => {
  it("should render NavMain with items", () => {
    renderWithProvider(<NavMain items={mockItems} />);

    expect(screen.getByText("Aplicativo web")).toBeInTheDocument();
    expect(screen.getByText("IA chat")).toBeInTheDocument();
  });

  it("should render items with icons", () => {
    renderWithProvider(<NavMain items={mockItems} />);

    expect(screen.getByTestId("icon-SquareTerminal")).toBeInTheDocument();
    expect(screen.getByTestId("icon-Bot")).toBeInTheDocument();
  });

  it("should render subitems when items have subitems", () => {
    renderWithProvider(<NavMain items={mockItems} />);

    expect(screen.getByText("Experiencia")).toBeInTheDocument();
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
  });

  it("should render item without subitems", () => {
    renderWithProvider(<NavMain items={[mockItems[1]]} />);

    expect(screen.getByText("IA chat")).toBeInTheDocument();
    expect(screen.queryByText("Experiencia")).not.toBeInTheDocument();
  });

  it("should render group label", () => {
    renderWithProvider(<NavMain items={mockItems} />);

    expect(screen.getByText("Portafolio")).toBeInTheDocument();
  });

  it("should handle item with isActive false", () => {
    const itemsWithInactive = [
      {
        ...mockItems[0],
        isActive: false,
      },
    ];
    renderWithProvider(<NavMain items={itemsWithInactive} />);

    expect(screen.getByText("Aplicativo web")).toBeInTheDocument();
  });

  it("should handle item without isActive property", () => {
    const itemsWithoutActive: BaseNavItemType[] = [
      {
        title: "newChat",
        url: "/test",
        icon: "SquareTerminal",
      },
    ];
    renderWithProvider(<NavMain items={itemsWithoutActive} />);

    expect(screen.getByText("Nuevo chat")).toBeInTheDocument();
  });

  it("should handle empty items array", () => {
    renderWithProvider(<NavMain items={[]} />);

    expect(screen.getByText("Portafolio")).toBeInTheDocument();
    expect(screen.queryByText("Aplicativo web")).not.toBeInTheDocument();
  });

  it("should render collapsible trigger when items have subitems", () => {
    renderWithProvider(<NavMain items={mockItems} />);

    const toggleButtons = screen.getAllByRole("button");
    // Should have toggle buttons for collapsible items
    expect(toggleButtons.length).toBeGreaterThan(0);
  });
});
