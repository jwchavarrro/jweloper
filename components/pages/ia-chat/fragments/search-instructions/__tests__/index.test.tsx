import { render, screen } from "@testing-library/react";
import { SearchInstructions } from "../index";

describe("SearchInstructions", () => {
  it("should render the component", () => {
    render(<SearchInstructions />);
    const title = screen.getByText("Ejemplo de búsqueda:");
    expect(title).toBeInTheDocument();
  });

  it("should render the title", () => {
    render(<SearchInstructions />);
    const title = screen.getByText("Ejemplo de búsqueda:");
    expect(title).toBeInTheDocument();
  });

  it("should render all search examples", () => {
    render(<SearchInstructions />);
    const examples = [
      "Consultar última empresa registrada y responsabilidades principales.",
      "Listar las tecnologías con mayor dominio según el CV.",
      "Obtener el proyecto más destacado y los aportes realizados.",
      "Extraer los puntos que diferencian su perfil profesional frente a otros.",
      "Ver formación académica principal indicada en el documento.",
      "Mostrar enlace del portafolio disponible en el CV.",
    ];

    examples.forEach((example) => {
      expect(screen.getByText(example)).toBeInTheDocument();
    });
  });

  it("should render examples as list items", () => {
    render(<SearchInstructions />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe("UL");
  });

  it("should have 6 list items", () => {
    render(<SearchInstructions />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(6);
  });

  it("should render with Alert component", () => {
    render(<SearchInstructions />);
    const alert = document.querySelector('[role="alert"]');
    expect(alert).toBeInTheDocument();
  });

  it("should have proper styling classes", () => {
    render(<SearchInstructions />);
    const alert = document.querySelector('[role="alert"]');
    expect(alert).toHaveClass("bg-muted", "border", "rounded-lg");
  });
});
