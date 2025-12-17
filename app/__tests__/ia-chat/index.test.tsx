import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import IaChat from "../../ia-chat/page";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock crypto.randomUUID
Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: jest.fn(() => "test-uuid-123"),
  },
});

describe("IaChat Page", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it("should render the IaChat page", () => {
    render(<IaChat />);
    const heading = screen.getByRole("heading", {
      name: /¿por donde quieres empezar\?/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should render h1 element with correct text", () => {
    render(<IaChat />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("¿Por donde quieres empezar?");
  });

  it("should render InputSearch component", () => {
    render(<IaChat />);
    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    expect(input).toBeInTheDocument();
  });

  it("should render within a div container", () => {
    const { container } = render(<IaChat />);
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
  });

  it("should show instructions by default", () => {
    render(<IaChat />);
    const instructions = screen.getByText(/ejemplo de búsqueda/i);
    expect(instructions).toBeInTheDocument();
  });

  it("should toggle instructions when button is clicked", async () => {
    const user = userEvent.setup();
    render(<IaChat />);

    const instructions = screen.getByText(/ejemplo de búsqueda/i);
    expect(instructions).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", {
      name: /ocultar instrucciones/i,
    });
    await user.click(toggleButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/ejemplo de búsqueda/i)
      ).not.toBeInTheDocument();
    });
  });

  it("should call handleSubmitChat when form is submitted with valid input", async () => {
    const user = userEvent.setup();
    render(<IaChat />);

    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    await user.type(input, "test question");
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(
        expect.stringContaining("/ia-chat/test-uuid-123?q=test%20question")
      );
    });
  });

  it("should not call handleSubmitChat when form is submitted with empty input", async () => {
    const user = userEvent.setup();
    render(<IaChat />);

    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    await user.type(input, "   ");
    await user.keyboard("{Enter}");

    expect(mockPush).not.toHaveBeenCalled();
  });

  it("should trim whitespace from input before submitting", async () => {
    const user = userEvent.setup();
    render(<IaChat />);

    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    await user.type(input, "  test question  ");
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(
        expect.stringContaining("q=test%20question")
      );
    });
  });
});
