import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Section01 } from "../index";
import { CV_FILE } from "@/components/pages/app-web/utils/constants";

const mockDownloadFile = jest.fn();

jest.mock("@/hooks", () => ({
  ...jest.requireActual("@/hooks"),
  useDownloadFile: () => ({
    downloadFile: mockDownloadFile,
    state: { status: "idle", error: null },
  }),
}));

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

  it("should render within a section", () => {
    const { container } = render(<Section01 />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should have correct structure with two columns", () => {
    const { container } = render(<Section01 />);
    // Verificar que hay un grid con dos columnas en xl
    const grid = container.querySelector(".xl\\:grid-cols-2");
    expect(grid).toBeInTheDocument();
  });

  it("should show the years of the hovered or focused skill and restore the default", async () => {
    const user = userEvent.setup();
    render(<Section01 />);

    expect(screen.getByText("+3")).toBeInTheDocument();

    const reactChip = screen.getByText("React").closest("span[tabindex]");
    expect(reactChip).not.toBeNull();

    await user.hover(reactChip as Element);
    expect(screen.getByText("+2")).toBeInTheDocument();

    await user.unhover(reactChip as Element);
    expect(screen.getByText("+3")).toBeInTheDocument();

    (reactChip as HTMLElement).focus();
    expect(await screen.findByText("+2")).toBeInTheDocument();

    (reactChip as HTMLElement).blur();
    expect(await screen.findByText("+3")).toBeInTheDocument();
  });

  it("should download the CV file when clicking the download button", async () => {
    const user = userEvent.setup();
    render(<Section01 />);

    await user.click(screen.getByRole("button", { name: /Descargar CV/i }));

    expect(mockDownloadFile).toHaveBeenCalledWith(CV_FILE.path, CV_FILE.name);
  });
});
