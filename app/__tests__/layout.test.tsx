import { render } from "@testing-library/react";
import RootLayout from "../layout";

// Mock reutilizable del componente Sidebar
jest.mock("@/components/atomic-design/organism/navigate", () => ({
  Sidebar: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sidebar">{children}</div>
  ),
}));

// Mocks específicos para este test

jest.mock("@/components/atomic-design/organism/navigate/sidebar/utils", () => ({
  SIDEBAR_DATA: {
    user: { name: "test", email: "test@test.com", avatar: "/avatar.jpg" },
    navMain: [],
    navSecondary: [],
    chats: [],
  },
}));

describe("RootLayout", () => {
  it("should render the layout with children", () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );
    // Verificar que el contenido se renderiza
    expect(container.textContent).toContain("Test Content");
  });
});
