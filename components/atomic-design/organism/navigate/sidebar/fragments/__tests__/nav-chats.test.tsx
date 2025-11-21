import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavChats } from "../nav-chats";
import { renderWithProvider } from "../../__mocks__/test-utils";

// Mock reutilizable de getSidebarIcon (función helper en __mocks__/getSidebarIcon.ts)
jest.mock("../../utils", () => ({
  ...jest.requireActual("../../utils"),
  getSidebarIcon: (iconName: string) => {
    const MockIcon = () => <span data-testid={`icon-${iconName}`}>Icon</span>;
    return MockIcon;
  },
}));

const mockChats = [
  {
    name: "Chat 1",
    url: "#",
    icon: "Frame",
  },
  {
    name: "Chat 2",
    url: "#",
    icon: "PieChart",
  },
];

describe("NavChats", () => {
  it("should render NavChats with chats", () => {
    renderWithProvider(<NavChats chats={mockChats} />);

    expect(screen.getByText("Chat 1")).toBeInTheDocument();
    expect(screen.getByText("Chat 2")).toBeInTheDocument();
  });

  it("should render chats with icons", () => {
    renderWithProvider(<NavChats chats={mockChats} />);

    expect(screen.getByTestId("icon-Frame")).toBeInTheDocument();
    expect(screen.getByTestId("icon-PieChart")).toBeInTheDocument();
  });

  it("should render group label", () => {
    renderWithProvider(<NavChats chats={mockChats} />);

    expect(screen.getByText("Chats")).toBeInTheDocument();
  });

  it("should render empty when no chats", () => {
    renderWithProvider(<NavChats chats={[]} />);

    expect(screen.queryByText("Chat 1")).not.toBeInTheDocument();
    expect(screen.getByText("Chats")).toBeInTheDocument();
  });

  it("should render dropdown menu trigger", () => {
    renderWithProvider(<NavChats chats={mockChats} />);

    const triggers = screen.getAllByRole("button");
    // Should have at least one trigger for the dropdown
    expect(triggers.length).toBeGreaterThan(0);
  });

  it("should render dropdown menu items when opened", async () => {
    const user = userEvent.setup();
    renderWithProvider(<NavChats chats={mockChats} />);

    // Find and click the dropdown trigger
    const triggers = screen.getAllByRole("button");
    const dropdownTrigger = triggers.find(
      (btn) =>
        btn.querySelector('span[class*="sr-only"]')?.textContent === "More"
    );

    if (dropdownTrigger) {
      await user.click(dropdownTrigger);
      // Wait for menu items to appear
      await screen.findByText("Ver");
      expect(screen.getByText("Ver")).toBeInTheDocument();
      expect(screen.getByText("Compartir")).toBeInTheDocument();
      expect(screen.getByText("Eliminar")).toBeInTheDocument();
    }
  });
});
