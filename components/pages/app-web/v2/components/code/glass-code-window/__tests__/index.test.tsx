/**
 * @file index.test.tsx
 * @description Tests para el componente GlassCodeWindow.
 */

import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { GlassCodeWindow } from "../index";
import type { FileItem, GlassCodeWindowProps } from "../utils";
import * as hooks from "@/hooks";

// Mock del hook useIsMobile
jest.mock("@/hooks", () => ({
  useIsMobile: jest.fn(() => false),
}));

// Mock de navigator.clipboard
let mockWriteText: jest.Mock;

beforeAll(() => {
  // Asegurar que navigator.clipboard existe
  if (!navigator.clipboard) {
    Object.defineProperty(navigator, "clipboard", {
      value: {},
      writable: true,
      configurable: true,
    });
  }
  mockWriteText = jest.fn().mockResolvedValue(undefined);
  navigator.clipboard.writeText = mockWriteText;
});

describe("GlassCodeWindow", () => {
  /** Un archivo con el contenido y lenguaje dados */
  const withCode = (
    content: string,
    language: FileItem["language"] = "json"
  ): FileItem[] => [{ name: "test.json", content, language }];

  const defaultProps: GlassCodeWindowProps = {
    files: withCode('{"test": "value"}'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    if (mockWriteText) {
      mockWriteText.mockResolvedValue(undefined);
    }
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("should render the code editor", () => {
    render(<GlassCodeWindow {...defaultProps} />);
    expect(screen.getByText(/"test": "value"/)).toBeInTheDocument();
  });

  it("should display the content of the first file", () => {
    render(<GlassCodeWindow files={withCode("const x = 1;", "javascript")} />);
    expect(screen.getByText(/const x = 1/i)).toBeInTheDocument();
  });

  it("should calculate line numbers correctly", () => {
    const code = "line1\nline2\nline3";
    render(<GlassCodeWindow files={withCode(code)} />);
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
    render(<GlassCodeWindow files={files} />);
    expect(screen.getByText(/"file": "content"/)).toBeInTheDocument();
  });

  it("should show the file explorer on desktop", () => {
    jest.spyOn(hooks, "useIsMobile").mockReturnValue(false);

    const files = [
      {
        name: "test.json",
        content: '{"test": "value"}',
        language: "json" as const,
      },
    ];
    render(<GlassCodeWindow files={files} />);
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
    render(<GlassCodeWindow files={files} />);
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
    render(<GlassCodeWindow files={files} />);
    // Verificamos que el componente se renderiza (los tabs están en TabsBar)
    expect(screen.getByText("test.json")).toBeInTheDocument();
  });

  it("should copy code to clipboard when copy button is clicked", async () => {
    const user = userEvent.setup({ delay: null });
    const code = "test code";
    render(<GlassCodeWindow files={withCode(code)} />);

    const copyButton = screen.getByTitle("Copiar código");
    await act(async () => {
      await user.click(copyButton);
    });

    // Verificar que se muestra el mensaje de éxito (indica que se intentó copiar)
    await waitFor(
      () => {
        expect(screen.getByText("Copiado al portapapeles")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it("should show success message after copying", async () => {
    const user = userEvent.setup({ delay: null });
    render(<GlassCodeWindow {...defaultProps} />);

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
    render(<GlassCodeWindow {...defaultProps} />);

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
    // Crear un mock que falle
    const originalWriteText = navigator.clipboard?.writeText;
    const failingMock = jest.fn().mockRejectedValue(new Error("Copy failed"));

    if (navigator.clipboard) {
      navigator.clipboard.writeText = failingMock;
    } else {
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText: failingMock },
        writable: true,
        configurable: true,
      });
    }

    render(<GlassCodeWindow files={withCode("test")} />);

    const copyButton = screen.getByTitle("Copiar código");
    await act(async () => {
      await user.click(copyButton);
    });

    // Esperar a que se procese el error
    await waitFor(
      () => {
        expect(screen.getByText("Error al copiar")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // Restaurar el mock original
    if (navigator.clipboard && originalWriteText) {
      navigator.clipboard.writeText = originalWriteText;
    } else if (mockWriteText) {
      navigator.clipboard.writeText = mockWriteText;
    }
  });

  it("should apply custom className", () => {
    const { container } = render(
      <GlassCodeWindow {...defaultProps} className="custom-class" />
    );
    const editor = container.firstChild;
    expect(editor).toHaveClass("custom-class");
  });

  it("should display the file language in footer", () => {
    render(<GlassCodeWindow files={withCode("const x = 1;", "javascript")} />);
    expect(screen.getByText("JAVASCRIPT")).toBeInTheDocument();
  });

  it("should display correct line count in footer", () => {
    const code = "line1\nline2\nline3";
    render(<GlassCodeWindow files={withCode(code)} />);
    expect(screen.getByText("3 líneas")).toBeInTheDocument();
  });

  it("should display correct character count in footer", () => {
    const code = "test";
    render(<GlassCodeWindow files={withCode(code)} />);
    expect(screen.getByText("4 caracteres")).toBeInTheDocument();
  });
});
