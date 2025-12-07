import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/makeStore";
import { Sidebar } from "../index";

// Mock reutilizable del componente Sidebar
jest.mock("@/components/atomic-design/organism/navigate", () => ({
  Breadcrumb: () => <nav data-testid="breadcrumb">Breadcrumb</nav>,
}));

// Mocks específicos para este test
jest.mock("../fragments", () => ({
  AppSidebar: () => <div data-testid="app-sidebar">Sidebar Content</div>,
}));

// Helper para renderizar con Redux Provider
const renderWithRedux = (component: React.ReactElement) => {
  const store = makeStore();
  return render(<Provider store={store}>{component}</Provider>);
};

const mockSidebarData = {
  user: {
    name: "Test User",
    email: "test@example.com",
    avatar: "/avatar.jpg",
  },
  navMain: [],
  navSecondary: [],
  chats: [],
};

describe("Sidebar", () => {
  it("should render Sidebar component", () => {
    renderWithRedux(
      <Sidebar data={mockSidebarData}>
        <div>Test Content</div>
      </Sidebar>
    );

    expect(screen.getByTestId("app-sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();
  });

  it("should render children", () => {
    renderWithRedux(
      <Sidebar data={mockSidebarData}>
        <div data-testid="child">Test Content</div>
      </Sidebar>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should pass data to AppSidebar", () => {
    renderWithRedux(
      <Sidebar data={mockSidebarData}>
        <div>Test</div>
      </Sidebar>
    );

    expect(screen.getByTestId("app-sidebar")).toBeInTheDocument();
  });

  it("should render SidebarTrigger", () => {
    const { container } = renderWithRedux(
      <Sidebar data={mockSidebarData}>
        <div>Test</div>
      </Sidebar>
    );

    const trigger = container.querySelector('[data-sidebar="trigger"]');
    expect(trigger).toBeInTheDocument();
  });

  it("should render Separator", () => {
    const { container } = renderWithRedux(
      <Sidebar data={mockSidebarData}>
        <div>Test</div>
      </Sidebar>
    );

    const separator = container.querySelector('[data-slot="separator"]');
    expect(separator).toBeInTheDocument();
  });

  it("should render header with Breadcrumb", () => {
    renderWithRedux(
      <Sidebar data={mockSidebarData}>
        <div>Test</div>
      </Sidebar>
    );

    const breadcrumb = screen.getByTestId("breadcrumb");
    expect(breadcrumb).toBeInTheDocument();
  });

  it("should render children in content area", () => {
    renderWithRedux(
      <Sidebar data={mockSidebarData}>
        <div data-testid="content">Content Area</div>
      </Sidebar>
    );

    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Content Area");
  });
});
