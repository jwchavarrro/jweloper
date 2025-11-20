import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputSearch } from "../input-search";

describe("InputSearch", () => {
  it("should render input with placeholder", () => {
    render(<InputSearch placeholder="Buscar..." />);
    const input = screen.getByPlaceholderText("Buscar...");
    expect(input).toBeInTheDocument();
  });

  it("should render with default placeholder when not provided", () => {
    render(<InputSearch />);
    const input = screen.getByPlaceholderText("Buscar...");
    expect(input).toBeInTheDocument();
  });

  it("should show clear button when input has value", async () => {
    const user = userEvent.setup();
    render(<InputSearch />);
    const input = screen.getByPlaceholderText("Buscar...");
    
    await user.type(input, "test");
    
    const clearButton = screen.getByRole("button", { name: /limpiar búsqueda/i });
    expect(clearButton).toBeInTheDocument();
  });

  it("should hide clear button when input is empty", () => {
    render(<InputSearch />);
    const clearButton = screen.queryByRole("button", { name: /limpiar búsqueda/i });
    expect(clearButton).not.toBeInTheDocument();
  });

  it("should clear input when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(<InputSearch />);
    const input = screen.getByPlaceholderText("Buscar...");
    
    await user.type(input, "test");
    expect(input).toHaveValue("test");
    
    const clearButton = screen.getByRole("button", { name: /limpiar búsqueda/i });
    await user.click(clearButton);
    
    expect(input).toHaveValue("");
    expect(clearButton).not.toBeInTheDocument();
  });

  it("should work as controlled component", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<InputSearch value="initial" onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText("Buscar...");
    expect(input).toHaveValue("initial");
    
    await user.type(input, " new");
    expect(handleChange).toHaveBeenCalled();
  });

  it("should work as uncontrolled component", async () => {
    const user = userEvent.setup();
    render(<InputSearch />);
    
    const input = screen.getByPlaceholderText("Buscar...");
    await user.type(input, "test");
    
    expect(input).toHaveValue("test");
  });

  it("should clear controlled input when button is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<InputSearch value="test" onChange={handleChange} />);
    
    const clearButton = screen.getByRole("button", { name: /limpiar búsqueda/i });
    await user.click(clearButton);
    
    expect(handleChange).toHaveBeenCalledWith("");
  });

  it("should apply size prop", () => {
    const { rerender } = render(<InputSearch size="sm" />);
    let input = screen.getByPlaceholderText("Buscar...");
    expect(input).toHaveClass("h-8");

    rerender(<InputSearch size="md" />);
    input = screen.getByPlaceholderText("Buscar...");
    expect(input).toHaveClass("h-9");

    rerender(<InputSearch size="lg" />);
    input = screen.getByPlaceholderText("Buscar...");
    expect(input).toHaveClass("h-11");
  });

  it("should pass through additional props to InputText", () => {
    render(<InputSearch disabled data-testid="search-input" />);
    const input = screen.getByTestId("search-input");
    expect(input).toBeDisabled();
  });

  it("should handle empty string as no value", () => {
    render(<InputSearch value="" />);
    const clearButton = screen.queryByRole("button", { name: /limpiar búsqueda/i });
    expect(clearButton).not.toBeInTheDocument();
  });
});

