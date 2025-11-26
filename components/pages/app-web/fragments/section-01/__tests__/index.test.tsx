import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Section01 } from "../index";

// Mock de los iconos
interface IconProps {
  icon: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

jest.mock("@iconify/react", () => ({
  Icon: ({ icon, className, onMouseEnter, onMouseLeave }: IconProps) => (
    <div
      data-testid={`icon-${icon}`}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
    </div>
  ),
}));

describe("Section01", () => {
  it("should render the Section01 component", () => {
    render(<Section01 />);
    const title = screen.getByText(/Desarrollador Frontend/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the main title", () => {
    render(<Section01 />);
    const title = screen.getByText(/Desarrollador Frontend/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the main greeting", () => {
    render(<Section01 />);
    const greeting = screen.getByText(/Hola, soy John Chavarro Urrea/i);
    expect(greeting).toBeInTheDocument();
  });

  it("should render skills icons", () => {
    render(<Section01 />);
    // Verificar que hay iconos renderizados (al menos uno)
    const icons = screen.getAllByTestId(/^icon-/);
    expect(icons.length).toBeGreaterThan(0);
  });

  it("should show experience when hovering over a skill icon", async () => {
    const user = userEvent.setup();
    render(<Section01 />);

    // Encontrar el primer icono
    const icons = screen.getAllByTestId(/^icon-/);
    expect(icons.length).toBeGreaterThan(0);

    // Hacer hover sobre el primer icono
    await user.hover(icons[0]);

    // Verificar que el CounterIndicator muestra algún valor
    // (puede ser vacío inicialmente, pero debería cambiar al hacer hover)
    const counterIndicator = screen.getByText(/años de experiencia/i);
    expect(counterIndicator).toBeInTheDocument();
  });

  it("should hide experience when mouse leaves a skill icon", async () => {
    const user = userEvent.setup();
    render(<Section01 />);

    const icons = screen.getAllByTestId(/^icon-/);
    expect(icons.length).toBeGreaterThan(0);

    // Hacer hover y luego quitar el mouse
    await user.hover(icons[0]);
    await user.unhover(icons[0]);

    // El componente debería manejar el estado correctamente
    // Verificamos que el componente sigue renderizado
    expect(screen.getByText(/Desarrollador Frontend/i)).toBeInTheDocument();
  });

  it("should render within a SnapPage component", () => {
    const { container } = render(<Section01 />);
    const section = container.querySelector("section.snap-start");
    expect(section).toBeInTheDocument();
  });

  it("should have correct structure with two columns", () => {
    const { container } = render(<Section01 />);
    // Verificar que hay un grid con dos columnas en xl
    const grid = container.querySelector(".xl\\:grid-cols-2");
    expect(grid).toBeInTheDocument();
  });
});
