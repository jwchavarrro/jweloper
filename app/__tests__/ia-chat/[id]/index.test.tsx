import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useSearchParams } from "next/navigation";
import IaChatIdPage from "../../../ia-chat/[id]/page";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

// Mock crypto.randomUUID
let uuidCounter = 0;
Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: jest.fn(() => `test-uuid-${++uuidCounter}`),
  },
});

describe("IaChatIdPage", () => {
  const mockGet = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    uuidCounter = 0;
    (useSearchParams as jest.Mock).mockReturnValue({
      get: mockGet,
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render empty state when no messages", () => {
    mockGet.mockReturnValue(null);
    render(<IaChatIdPage />);
    expect(screen.getByText("Iniciando conversación...")).toBeInTheDocument();
  });

  it("should initialize with query param and show messages", async () => {
    mockGet.mockReturnValue("test question");
    render(<IaChatIdPage />);

    expect(screen.getByText("Iniciando conversación...")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    await waitFor(() => {
      const messages = screen.getAllByText(/test question/i);
      expect(messages.length).toBeGreaterThan(0);
    });
  });

  it("should handle form submission", async () => {
    const user = userEvent.setup({ delay: null });
    mockGet.mockReturnValue(null);
    render(<IaChatIdPage />);

    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    await user.type(input, "new question");
    await user.keyboard("{Enter}");

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(screen.getByText("new question")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText(/Esta es una respuesta simulada a: "new question"/i)
      ).toBeInTheDocument();
    });
  }, 10000);

  it("should not submit empty input", async () => {
    const user = userEvent.setup({ delay: null });
    mockGet.mockReturnValue(null);
    render(<IaChatIdPage />);

    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    await user.type(input, "   ");
    await user.keyboard("{Enter}");

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText("Iniciando conversación...")).toBeInTheDocument();
  });

  it("should clear input after submission", async () => {
    const user = userEvent.setup({ delay: null });
    mockGet.mockReturnValue(null);
    render(<IaChatIdPage />);

    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    await user.type(input, "test");
    await user.keyboard("{Enter}");

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });

  it("should display user and assistant messages", async () => {
    const user = userEvent.setup({ delay: null });
    mockGet.mockReturnValue(null);
    render(<IaChatIdPage />);

    const input = screen.getByPlaceholderText("Escribe tu pregunta...");
    await user.type(input, "test question");
    await user.keyboard("{Enter}");

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(screen.getByText("test question")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText(/Esta es una respuesta simulada/i)
      ).toBeInTheDocument();
    });
  }, 10000);
});
