import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "../index";

describe("Card (atom)", () => {
  it("should render a div by default", () => {
    render(<Card data-testid="card">Contenido</Card>);
    const card = screen.getByTestId("card");
    expect(card.tagName).toBe("DIV");
    expect(card).not.toHaveAttribute("role");
  });

  it("should render a link when href is provided", () => {
    render(
      <Card href="/app-web" target="_blank" rel="noopener noreferrer">
        Enlace
      </Card>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/app-web");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveTextContent("Enlace");
  });

  it("should be an accessible button when onClick is provided", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const onKeyDown = jest.fn();
    render(
      <Card onClick={onClick} onKeyDown={onKeyDown}>
        Acción
      </Card>
    );

    const button = screen.getByRole("button", { name: "Acción" });
    expect(button).toHaveAttribute("tabindex", "0");

    await user.click(button);
    button.focus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(3);
    expect(onKeyDown).toHaveBeenCalled();
  });
});
