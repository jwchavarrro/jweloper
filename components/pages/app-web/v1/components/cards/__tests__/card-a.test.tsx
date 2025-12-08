/**
 * @file card-a.test.tsx
 * @description Tests para el componente CardA
 */

import { render, screen } from "@testing-library/react";
import { CardA } from "../card-a";
import { CardAData } from "@/components/pages/app-web/v1/utils";

// Mock de los componentes
jest.mock("@/components/atomic-design/atoms", () => ({
  Title: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <h4 className={className}>{children}</h4>,
  Text: ({
    children,
    variant,
    className,
  }: {
    children: React.ReactNode;
    variant?: string;
    className?: string;
  }) => <p className={className}>{children}</p>,
}));

jest.mock("@/components/atomic-design/molecules/card", () => ({
  Card: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div data-slot="card" className={className}>{children}</div>,
}));

jest.mock("@/components/atomic-design", () => ({
  Badge: ({ text }: { text: string }) => <span data-testid="badge">{text}</span>,
}));

jest.mock("@iconify/react", () => ({
  Icon: ({ icon, className }: { icon: string; className?: string }) => (
    <svg data-testid={`icon-${icon}`} className={className} />
  ),
}));

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("CardA", () => {
  const mockData: CardAData = {
    dates: "2022 – 2025",
    title: "Desarrollador de Aplicaciones",
    company: {
      name: "Prevalentware s.a.s",
      url: "https://www.prevalentware.com",
    },
    location: "Neiva, Colombia",
    isRemote: true,
    description: ["Desarrollo de aplicaciones web modernas"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  };

  it("should render card component", () => {
    render(<CardA data={mockData} />);
    const card = screen.getByText("Desarrollador de Aplicaciones");
    expect(card).toBeInTheDocument();
  });

  it("should render dates", () => {
    render(<CardA data={mockData} />);
    expect(screen.getByText("2022 – 2025")).toBeInTheDocument();
  });

  it("should render title", () => {
    render(<CardA data={mockData} />);
    expect(screen.getByText("Desarrollador de Aplicaciones")).toBeInTheDocument();
  });

  it("should render company name", () => {
    render(<CardA data={mockData} />);
    expect(screen.getByText("Prevalentware s.a.s")).toBeInTheDocument();
  });

  it("should render location", () => {
    render(<CardA data={mockData} />);
    // El texto está dividido, buscar por parte del texto
    expect(screen.getByText(/Neiva, Colombia/i)).toBeInTheDocument();
  });

  it("should render remote indicator when isRemote is true", () => {
    render(<CardA data={mockData} />);
    expect(screen.getByText("Remoto")).toBeInTheDocument();
  });

  it("should not render remote indicator when isRemote is false", () => {
    const dataWithoutRemote = { ...mockData, isRemote: false };
    render(<CardA data={dataWithoutRemote} />);
    expect(screen.queryByText("Remoto")).not.toBeInTheDocument();
  });

  it("should render company link when url is provided", () => {
    render(<CardA data={mockData} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://www.prevalentware.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render external link icon when company url is provided", () => {
    render(<CardA data={mockData} />);
    expect(screen.getByTestId("icon-mdi:open-in-new")).toBeInTheDocument();
  });

  it("should not render external link icon when company url is not provided", () => {
    const dataWithoutUrl = {
      ...mockData,
      company: { name: "Company Name" },
    };
    render(<CardA data={dataWithoutUrl} />);
    expect(screen.queryByTestId("icon-mdi:open-in-new")).not.toBeInTheDocument();
  });

  it("should render description", () => {
    render(<CardA data={mockData} />);
    // description es un array, React renderiza arrays como elementos separados
    expect(
      screen.getByText("Desarrollo de aplicaciones web modernas")
    ).toBeInTheDocument();
  });

  it("should render multiple descriptions when description is an array", () => {
    const dataWithMultipleDescriptions = {
      ...mockData,
      description: [
        "Primera descripción",
        "Segunda descripción",
        "Tercera descripción",
      ],
    };
    render(<CardA data={dataWithMultipleDescriptions} />);
    // Como description es un array y se pasa directamente, React renderiza todos los elementos concatenados
    const descriptionText = screen.getByText(
      /Primera descripciónSegunda descripciónTercera descripción/
    );
    expect(descriptionText).toBeInTheDocument();
    // También podemos verificar que cada parte está presente
    expect(screen.getByText(/Primera descripción/)).toBeInTheDocument();
    expect(screen.getByText(/Segunda descripción/)).toBeInTheDocument();
    expect(screen.getByText(/Tercera descripción/)).toBeInTheDocument();
  });

  it("should render technologies as badges", () => {
    render(<CardA data={mockData} />);
    const badges = screen.getAllByTestId("badge");
    expect(badges).toHaveLength(3);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
  });

  it("should not render technologies section when technologies array is empty", () => {
    const dataWithoutTech = { ...mockData, technologies: [] };
    render(<CardA data={dataWithoutTech} />);
    // Los badges no deberían estar presentes
    const badges = screen.queryAllByTestId("badge");
    expect(badges).toHaveLength(0);
  });

  it("should not render technologies section when technologies is undefined", () => {
    const dataWithoutTech = { ...mockData };
    delete dataWithoutTech.technologies;
    render(<CardA data={dataWithoutTech} />);
    const badges = screen.queryAllByTestId("badge");
    expect(badges).toHaveLength(0);
  });

  it("should accept custom className", () => {
    const { container } = render(<CardA data={mockData} className="custom-class" />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveClass("custom-class");
  });

  it("should render all data correctly", () => {
    render(<CardA data={mockData} />);
    expect(screen.getByText("2022 – 2025")).toBeInTheDocument();
    expect(screen.getByText("Desarrollador de Aplicaciones")).toBeInTheDocument();
    expect(screen.getByText("Prevalentware s.a.s")).toBeInTheDocument();
    expect(screen.getByText(/Neiva, Colombia/i)).toBeInTheDocument();
    expect(screen.getByText("Remoto")).toBeInTheDocument();
    expect(
      screen.getByText("Desarrollo de aplicaciones web modernas")
    ).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});

