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

// Mock de next/navigation
const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  }),
}));

describe("Home Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it("should render buttons with correct text", () => {
    render(<Home />);
    const cvAppButton = screen.getByRole("button", {
      name: /cv en aplicativo/i,
    });
    const cvIAButton = screen.getByRole("button", { name: /cv con ia/i });

    expect(cvAppButton).toBeInTheDocument();
    expect(cvIAButton).toBeInTheDocument();
  });

  it("should navigate when buttons are clicked", () => {
    render(<Home />);
    const cvAppButton = screen.getByRole("button", {
      name: /cv en aplicativo/i,
    });
    const cvIAButton = screen.getByRole("button", { name: /cv con ia/i });

    cvAppButton.click();
    expect(mockPush).toHaveBeenCalledWith("/app-web");

    cvIAButton.click();
    expect(mockPush).toHaveBeenCalledWith("/ia-chat");
  });

  it("should render within a div container", () => {
    const { container } = render(<Home />);
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
  });
});
