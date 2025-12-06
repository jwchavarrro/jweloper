/**
 * @file index.test.tsx
 * @description Tests para el componente CodeEditor.
 */

import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { CodeEditor } from "../index";
import type { CodeEditorProps } from "../utils";
import * as hooks from "@/hooks";

// Mock del hook useIsMobile
jest.mock("@/hooks", () => ({
  useIsMobile: jest.fn(() => false),
}));

// Mock de navigator.clipboard
const mockWriteText = jest.fn().mockResolvedValue(undefined);
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
});

describe("CodeEditor", () => {
  const defaultProps: CodeEditorProps = {
    code: '{"test": "value"}',
    language: "json",
    showSidebar: false,
    files: [],
    minHeight: "500px",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockWriteText.mockResolvedValue(undefined);
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("should render the code editor", () => {
    render(<CodeEditor {...defaultProps} />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it("should display code with default props", () => {
    render(<CodeEditor code="const x = 1;" language="javascript" />);
    expect(screen.getByText(/const x = 1/i)).toBeInTheDocument();
  });

  it("should calculate line numbers correctly", () => {
    const code = "line1\nline2\nline3";
    render(<CodeEditor {...defaultProps} code={code} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should use file content when files are provided", () => {
    const files = [
      {
        name: "test.json",
        content: '{"file": "content"}',
        language: "json" as const,
      },
    ];
    render(<CodeEditor {...defaultProps} files={files} />);
    expect(screen.getByText(/"file": "content"/)).toBeInTheDocument();
  });

  it("should show sidebar when showSidebar is true and files exist", () => {
    jest.spyOn(hooks, "useIsMobile").mockReturnValue(false);

    const files = [
      {
        name: "test.json",
        content: '{"test": "value"}',
        language: "json" as const,
      },
    ];
    render(<CodeEditor {...defaultProps} showSidebar={true} files={files} />);
    // El sidebar debería estar presente (verificamos por el FileExplorer)
    expect(screen.getByText("Explorador")).toBeInTheDocument();
  });

  it("should not show sidebar on mobile", () => {
    jest.spyOn(hooks, "useIsMobile").mockReturnValue(true);

    const files = [
      {
        name: "test.json",
        content: '{"test": "value"}',
        language: "json" as const,
      },
    ];
    render(<CodeEditor {...defaultProps} showSidebar={true} files={files} />);
    // En mobile no debería mostrar el sidebar
    expect(screen.queryByText("Explorador")).not.toBeInTheDocument();
    expect(screen.getByText(/"test": "value"/)).toBeInTheDocument();
  });

  it("should display tabs when files are provided", () => {
    const files = [
      {
        name: "test.json",
        content: '{"test": "value"}',
        language: "json" as const,
      },
    ];
    render(<CodeEditor {...defaultProps} files={files} />);
    // Verificamos que el componente se renderiza (los tabs están en TabsBar)
    expect(screen.getByText("test.json")).toBeInTheDocument();
  });

  it("should copy code to clipboard when copy button is clicked", async () => {
    const user = userEvent.setup({ delay: null });
    const code = "test code";
    render(<CodeEditor {...defaultProps} code={code} />);

    const copyButton = screen.getByTitle("Copiar código");
    await act(async () => {
      await user.click(copyButton);
    });

    await waitFor(() => {
      expect(mockWriteText).toHaveBeenCalledWith(code);
    });
  });

  it("should show success message after copying", async () => {
    const user = userEvent.setup({ delay: null });
    render(<CodeEditor {...defaultProps} />);

    const copyButton = screen.getByTitle("Copiar código");
    await act(async () => {
      await user.click(copyButton);
    });

    await waitFor(() => {
      expect(screen.getByText("Copiado al portapapeles")).toBeInTheDocument();
    });
  });

  it("should clear success message after 3 seconds", async () => {
    const user = userEvent.setup({ delay: null });
    render(<CodeEditor {...defaultProps} />);

    const copyButton = screen.getByTitle("Copiar código");
    await act(async () => {
      await user.click(copyButton);
    });

    await waitFor(() => {
      expect(screen.getByText("Copiado al portapapeles")).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(
        screen.queryByText("Copiado al portapapeles")
      ).not.toBeInTheDocument();
    });
  });

  it("should show error message when copy fails", async () => {
    const user = userEvent.setup({ delay: null });
    mockWriteText.mockClear();
    mockWriteText.mockRejectedValueOnce(new Error("Copy failed"));

    render(<CodeEditor {...defaultProps} code="test" />);

    const copyButton = screen.getByTitle("Copiar código");
    await act(async () => {
      await user.click(copyButton);
    });

    await waitFor(
      () => {
        expect(screen.getByText("Error al copiar")).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });

  it("should apply custom className", () => {
    const { container } = render(
      <CodeEditor {...defaultProps} className="custom-class" />
    );
    const editor = container.firstChild;
    expect(editor).toHaveClass("custom-class");
  });

  it("should apply custom minHeight", () => {
    const { container } = render(
      <CodeEditor {...defaultProps} minHeight="600px" />
    );
    const editor = container.firstChild as HTMLElement;
    expect(editor).toHaveStyle({ minHeight: "600px" });
  });

  it("should display correct language in footer", () => {
    render(<CodeEditor {...defaultProps} language="javascript" />);
    expect(screen.getByText("JAVASCRIPT")).toBeInTheDocument();
  });

  it("should display correct line count in footer", () => {
    const code = "line1\nline2\nline3";
    render(<CodeEditor {...defaultProps} code={code} />);
    expect(screen.getByText("3 líneas")).toBeInTheDocument();
  });

  it("should display correct character count in footer", () => {
    const code = "test";
    render(<CodeEditor {...defaultProps} code={code} />);
    expect(screen.getByText("4 caracteres")).toBeInTheDocument();
  });
});
