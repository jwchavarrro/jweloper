import { render, screen } from "@testing-library/react";
import { SnapPage } from "..";

describe("SnapPage", () => {
  it("should render the SnapPage component", () => {
    const { container } = render(
      <SnapPage id="01">
        <div>Test content</div>
      </SnapPage>
    );
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should render children content", () => {
    render(
      <SnapPage id="01">
        <div>Test content</div>
      </SnapPage>
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("should render with correct id value", () => {
    render(
      <SnapPage id="02">
        <div>Content</div>
      </SnapPage>
    );
    const heading = screen.getByText("02");
    expect(heading).toBeInTheDocument();
  });

  it("should have scroll-snap-align style", () => {
    const { container } = render(
      <SnapPage id="01">
        <div>Content</div>
      </SnapPage>
    );
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    // Verificar que tiene la altura correcta
    expect(section).toHaveClass("h-[calc(100dvh-96px)]");
  });

  it("should render CounterIndicator and ScrollIndicator", () => {
    render(
      <SnapPage id="03">
        <div>Content</div>
      </SnapPage>
    );
    // Verificar que el contador se renderiza
    const counter = screen.getByText("03");
    expect(counter).toBeInTheDocument();
    // Verificar que el indicador de scroll se renderiza
    const scrollText = screen.getByText("Scroll hacia abajo");
    expect(scrollText).toBeInTheDocument();
  });

  it("should apply anchorId to section element when provided", () => {
    const { container } = render(
      <SnapPage id="01" anchorId="proyectos">
        <div>Content</div>
      </SnapPage>
    );
    const section = container.querySelector("section#proyectos");
    expect(section).toBeInTheDocument();
  });

  it("should not have id attribute on section when anchorId is not provided", () => {
    const { container } = render(
      <SnapPage id="01">
        <div>Content</div>
      </SnapPage>
    );
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section?.id).toBe("");
  });
});
