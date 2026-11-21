import { screen } from "@testing-library/react";
import { AppSidebar } from "../app-sidebar";
import { renderWithProvider } from "../../__mocks__/test-utils";
import type { SidebarDataType } from "../../utils/types";

// Mocks específicos de los fragments para este test
jest.mock("../nav-main", () => ({
  NavMain: ({ items }: { items: unknown[] }) => (
    <div data-testid="nav-main">NavMain {items.length} items</div>
  ),
}));

jest.mock("../nav-chats", () => ({
  NavChats: ({ chats }: { chats: unknown[] }) => (
    <div data-testid="nav-chats">NavChats {chats.length} chats</div>
  ),
}));

jest.mock("../nav-secondary", () => ({
  NavSecondary: () => <div data-testid="nav-secondary">NavSecondary</div>,
}));

const mockSidebarData: SidebarDataType = {
  navMain: [
    {
      title: "appWeb",
      url: "/app-web",
      icon: "SquareTerminal",
    },
  ],
};

describe("AppSidebar", () => {
  it("should render AppSidebar", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />);

    expect(screen.getByTestId("nav-main")).toBeInTheDocument();
    expect(screen.getByTestId("nav-chats")).toBeInTheDocument();
    expect(screen.getByTestId("nav-secondary")).toBeInTheDocument();
  });

  it("should pass correct data to fragments", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />);

    expect(screen.getByText("NavMain 1 items")).toBeInTheDocument();
    expect(screen.getByText("NavChats 0 chats")).toBeInTheDocument();
    expect(screen.getByTestId("nav-secondary")).toBeInTheDocument();
  });

  it("should render header with logo link", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />);

    const logoLink = screen.getByRole("link", { name: /jweloper/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("should handle empty navMain array", () => {
    const emptyData: SidebarDataType = {
      ...mockSidebarData,
      navMain: [],
    };
    renderWithProvider(<AppSidebar data={emptyData} />);

    expect(screen.getByTestId("nav-main")).toBeInTheDocument();
    expect(screen.getByText("NavMain 0 items")).toBeInTheDocument();
  });

  it("should render NavSecondary component", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />);

    expect(screen.getByTestId("nav-secondary")).toBeInTheDocument();
  });

  it("should handle empty chats array", () => {
    renderWithProvider(<AppSidebar data={mockSidebarData} />);

    expect(screen.getByTestId("nav-chats")).toBeInTheDocument();
    expect(screen.getByText("NavChats 0 chats")).toBeInTheDocument();
  });

  it("should pass all data correctly to fragments", () => {
    const complexData: SidebarDataType = {
      navMain: [
        { title: "appWeb", url: "/1", icon: "SquareTerminal" },
        { title: "iaChat", url: "/2", icon: "Frame" },
      ],
    };
    renderWithProvider(<AppSidebar data={complexData} />);

    expect(screen.getByText("NavMain 2 items")).toBeInTheDocument();
    expect(screen.getByTestId("nav-secondary")).toBeInTheDocument();
    expect(screen.getByText("NavChats 0 chats")).toBeInTheDocument();
  });
});
