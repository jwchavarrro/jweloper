import { render, screen } from "@testing-library/react"
import Home from "../page"

describe("Home Page", () => {
  it("should render the home page", () => {
    render(<Home />)
    const heading = screen.getByRole("heading", { name: /hello world/i })
    expect(heading).toBeInTheDocument()
  })

  it("should render h1 element", () => {
    render(<Home />)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Hello World")
  })

  it("should render within a div container", () => {
    const { container } = render(<Home />)
    const div = container.querySelector("div")
    expect(div).toBeInTheDocument()
  })
})

