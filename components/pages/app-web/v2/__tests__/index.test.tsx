/**
 * @file index.test.tsx
 * @description Tests para el componente AppWebV2
 */

import { render, screen } from "@testing-library/react";
import { AppWebV2 } from "../index";

// Mock de los componentes de sección
jest.mock("@/components/pages/app-web/v2/fragments", () => ({
  Section01: () => <section data-testid="section-01">Section 01</section>,
  Section02: ({ anchorId }: { anchorId: string }) => (
    <section data-testid="section-02" id={anchorId}>
      Section 02
    </section>
  ),
  Section03: ({ anchorId }: { anchorId: string }) => (
    <section data-testid="section-03" id={anchorId}>
      Section 03
    </section>
  ),
  Section04: ({ anchorId }: { anchorId: string }) => (
    <section data-testid="section-04" id={anchorId}>
      Section 04
    </section>
  ),
}));

describe("AppWebV2", () => {
  it("should render AppWebV2 component", () => {
    const { container } = render(<AppWebV2 />);
    expect(container).toBeInTheDocument();
  });

  it("should render all sections", () => {
    render(<AppWebV2 />);
    expect(screen.getByTestId("section-01")).toBeInTheDocument();
    expect(screen.getByTestId("section-02")).toBeInTheDocument();
    expect(screen.getByTestId("section-03")).toBeInTheDocument();
    expect(screen.getByTestId("section-04")).toBeInTheDocument();
  });

  it("should render Section02 with correct anchorId", () => {
    render(<AppWebV2 />);
    const section02 = screen.getByTestId("section-02");
    expect(section02).toHaveAttribute("id", "experiencia");
  });

  it("should render Section03 with correct anchorId", () => {
    render(<AppWebV2 />);
    const section03 = screen.getByTestId("section-03");
    expect(section03).toHaveAttribute("id", "proyectos");
  });

  it("should render Section04 with correct anchorId", () => {
    render(<AppWebV2 />);
    const section04 = screen.getByTestId("section-04");
    expect(section04).toHaveAttribute("id", "contacto");
  });
});
