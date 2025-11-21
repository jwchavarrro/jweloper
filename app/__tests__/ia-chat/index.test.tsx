import { render, screen } from "@testing-library/react";
import IaChat from "../../ia-chat/page";

describe("IaChat Page", () => {
  it("should render the IaChat page", () => {
    render(<IaChat />);
    const heading = screen.getByRole("heading", {
      name: /¿en qué puedo ayudarte\?/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should render h1 element with correct text", () => {
    render(<IaChat />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("¿En qué puedo ayudarte?");
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
});
