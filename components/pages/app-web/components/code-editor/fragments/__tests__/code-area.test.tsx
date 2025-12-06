/**
 * @file code-area.test.tsx
 * @description Tests para el fragmento CodeArea.
 */

import { render, screen } from "@testing-library/react";
import * as React from "react";
import { CodeArea } from "../code-area";

describe("CodeArea", () => {
  const mockRefs = {
    codeScrollAreaRef: React.createRef<HTMLDivElement | null>(),
    lineNumbersRef: React.createRef<HTMLDivElement | null>(),
    lineNumbersContentRef: React.createRef<HTMLDivElement | null>(),
  };

  const defaultProps = {
    code: '{"test": "value"}',
    codeScrollAreaRef: mockRefs.codeScrollAreaRef,
    lineNumbersRef: mockRefs.lineNumbersRef,
    lineNumbersContentRef: mockRefs.lineNumbersContentRef,
    lineNumbers: [1, 2, 3],
  };

  it("should render the code area", () => {
    render(<CodeArea {...defaultProps} />);
    const codeElement = screen.getByText(/test/i);
    expect(codeElement).toBeInTheDocument();
  });

  it("should display line numbers", () => {
    render(<CodeArea {...defaultProps} />);
    const line1 = screen.getByText("1");
    const line2 = screen.getByText("2");
    const line3 = screen.getByText("3");
    expect(line1).toBeInTheDocument();
    expect(line2).toBeInTheDocument();
    expect(line3).toBeInTheDocument();
  });

  it("should render the code content", () => {
    const code = '{"example": "data"}';
    render(<CodeArea {...defaultProps} code={code} />);
    expect(screen.getByText(/example/i)).toBeInTheDocument();
  });

  it("should have correct structure with line numbers and code area", () => {
    const { container } = render(<CodeArea {...defaultProps} />);
    const mainContainer = container.firstChild;
    expect(mainContainer).toHaveClass("relative", "flex-1", "flex");
  });

  it("should render all line numbers provided", () => {
    const lineNumbers = [1, 2, 3, 4, 5];
    render(<CodeArea {...defaultProps} lineNumbers={lineNumbers} />);
    lineNumbers.forEach((num) => {
      expect(screen.getByText(num.toString())).toBeInTheDocument();
    });
  });
});
