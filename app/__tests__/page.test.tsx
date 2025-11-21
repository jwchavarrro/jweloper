import { render, screen } from "@testing-library/react";
import Home from "../page";

// Mock de Next.js Link
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("Home Page", () => {
  it("should render the home page", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /desarrollador frontend/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should render h1 element with correct content", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/desarrollador frontend/i);
  });

  it("should render Semi-Senior text", () => {
    render(<Home />);
    const text = screen.getByText("Semi-Senior");
    expect(text).toBeInTheDocument();
  });

  it("should render buttons with correct links", () => {
    render(<Home />);
    const cvAppLink = screen.getByRole("link", { name: /cv en aplicativo/i });
    const cvIALink = screen.getByRole("link", { name: /cv con ia/i });

    expect(cvAppLink).toBeInTheDocument();
    expect(cvIALink).toBeInTheDocument();
    expect(cvAppLink).toHaveAttribute("href", "/app-web");
    expect(cvIALink).toHaveAttribute("href", "/ia-chat/nuevo-chat");
  });

  it("should render within a div container", () => {
    const { container } = render(<Home />);
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
  });
});
