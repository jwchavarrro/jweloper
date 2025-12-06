/**
 * @file code-editor-footer.test.tsx
 * @description Tests para el fragmento CodeEditorFooter.
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CodeEditorFooter } from "../code-editor-footer";

describe("CodeEditorFooter", () => {
  const defaultProps = {
    language: "json",
    lineCount: 10,
    characterCount: 100,
    onCopy: jest.fn(),
    copyMessage: null,
  };

  it("should render the footer", () => {
    render(<CodeEditorFooter {...defaultProps} />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("should display the language", () => {
    render(<CodeEditorFooter {...defaultProps} />);
    expect(screen.getByText("JSON")).toBeInTheDocument();
  });

  it("should display the line count", () => {
    render(<CodeEditorFooter {...defaultProps} />);
    expect(screen.getByText("10 líneas")).toBeInTheDocument();
  });

  it("should display the character count", () => {
    render(<CodeEditorFooter {...defaultProps} />);
    expect(screen.getByText("100 caracteres")).toBeInTheDocument();
  });

  it("should call onCopy when copy button is clicked", async () => {
    const onCopy = jest.fn();
    render(<CodeEditorFooter {...defaultProps} onCopy={onCopy} />);
    const copyButton = screen.getByTitle("Copiar código");
    await userEvent.click(copyButton);
    expect(onCopy).toHaveBeenCalledTimes(1);
  });

  it("should display language in uppercase", () => {
    render(<CodeEditorFooter {...defaultProps} language="javascript" />);
    expect(screen.getByText("JAVASCRIPT")).toBeInTheDocument();
  });

  it("should display copy message when provided", () => {
    render(
      <CodeEditorFooter
        {...defaultProps}
        copyMessage="Copiado al portapapeles"
      />
    );
    expect(screen.getByText("Copiado al portapapeles")).toBeInTheDocument();
  });

  it("should not display copy message when null", () => {
    render(<CodeEditorFooter {...defaultProps} copyMessage={null} />);
    expect(
      screen.queryByText("Copiado al portapapeles")
    ).not.toBeInTheDocument();
  });
});
