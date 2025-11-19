import { screen } from "@testing-library/react"
import { NavUser } from "../nav-user"
import { renderWithProvider } from "../../__mocks__/test-utils"

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatar.jpg",
}

describe("NavUser", () => {
  it("should render NavUser with user data", () => {
    renderWithProvider(<NavUser user={mockUser} />)
    
    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("john@example.com")).toBeInTheDocument()
  })

  it("should render avatar", () => {
    const { container } = renderWithProvider(<NavUser user={mockUser} />)
    
    const avatar = container.querySelector('[data-slot="avatar"]')
    expect(avatar).toBeInTheDocument()
    
    const avatarImage = container.querySelector('img[src="/avatar.jpg"]')
    if (avatarImage) {
      expect(avatarImage).toHaveAttribute("src", "/avatar.jpg")
    }
  })

  it("should render dropdown menu trigger", () => {
    renderWithProvider(<NavUser user={mockUser} />)
    
    const trigger = screen.getByRole("button", { expanded: false })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute("aria-haspopup", "menu")
  })

  it("should render user name and email", () => {
    renderWithProvider(<NavUser user={mockUser} />)
    
    const nameElement = screen.getByText("John Doe")
    const emailElement = screen.getByText("john@example.com")
    
    expect(nameElement).toBeInTheDocument()
    expect(emailElement).toBeInTheDocument()
  })
})

