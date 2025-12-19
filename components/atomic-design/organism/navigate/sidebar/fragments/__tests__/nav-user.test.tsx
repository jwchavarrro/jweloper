import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavUser } from "../nav-user";
import { renderWithProvider } from "../../__mocks__/test-utils";

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatar.jpg",
};

describe("NavUser", () => {
  it("should render NavUser with user data", () => {
    renderWithProvider(<NavUser user={mockUser} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });

  it("should render avatar", () => {
    const { container } = renderWithProvider(<NavUser user={mockUser} />);

    const avatar = container.querySelector('[data-slot="avatar"]');
    expect(avatar).toBeInTheDocument();

    const avatarImage = container.querySelector('img[src="/avatar.jpg"]');
    if (avatarImage) {
      expect(avatarImage).toHaveAttribute("src", "/avatar.jpg");
    }
  });

  it("should render dropdown menu trigger", () => {
    renderWithProvider(<NavUser user={mockUser} />);

    const trigger = screen.getByRole("button", { expanded: false });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
  });

  it("should render user name and email", () => {
    renderWithProvider(<NavUser user={mockUser} />);

    const nameElement = screen.getByText("John Doe");
    const emailElement = screen.getByText("john@example.com");

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });

  it("should render dropdown menu when opened", async () => {
    const user = userEvent.setup();
    renderWithProvider(<NavUser user={mockUser} />);

    const trigger = screen.getByRole("button", { expanded: false });
    await user.click(trigger);

    // Wait for dropdown items to appear
    await screen.findByText(/Modo oscuro|Modo claro/);
    expect(screen.getByText(/Modo oscuro|Modo claro/)).toBeInTheDocument();
  });

  it("should render user info in dropdown header", async () => {
    const user = userEvent.setup();
    renderWithProvider(<NavUser user={mockUser} />);

    const trigger = screen.getByRole("button", { expanded: false });
    await user.click(trigger);

    // Wait for dropdown to open
    await screen.findByText(/Modo oscuro|Modo claro/);

    // User info should appear twice (in button and in dropdown header)
    const nameElements = screen.getAllByText("John Doe");
    const emailElements = screen.getAllByText("john@example.com");
    expect(nameElements.length).toBeGreaterThan(1);
    expect(emailElements.length).toBeGreaterThan(1);
  });
});
