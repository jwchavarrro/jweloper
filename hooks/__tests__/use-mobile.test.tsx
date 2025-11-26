import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "../use-mobile";

describe("useIsMobile", () => {
  let mockAddEventListener: jest.Mock;
  let mockRemoveEventListener: jest.Mock;
  let mockMatchMedia: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock de window.innerWidth
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    // Crear mocks para los event listeners
    mockAddEventListener = jest.fn();
    mockRemoveEventListener = jest.fn();

    // Crear mock de matchMedia
    mockMatchMedia = jest.fn().mockReturnValue({
      matches: false,
      media: "",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
      dispatchEvent: jest.fn(),
    });

    // Usar jest.spyOn para reemplazar el mock global
    jest.spyOn(window, "matchMedia").mockImplementation(mockMatchMedia);
  });

  it("should return false for desktop width (>= 768px)", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("should return true for mobile width (< 768px)", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("should return false for exactly 768px (breakpoint)", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 768,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("should return true for 767px (just below breakpoint)", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 767,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("should set up matchMedia listener on mount", () => {
    renderHook(() => useIsMobile());

    expect(mockMatchMedia).toHaveBeenCalledWith("(max-width: 767px)");
    expect(mockAddEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });

  it("should update when window width changes", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result, rerender } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    // Simular cambio de ancho
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });

    // Obtener el callback del listener
    const changeCallback = mockAddEventListener.mock.calls[0][1];

    act(() => {
      changeCallback();
    });

    expect(result.current).toBe(true);
  });

  it("should clean up event listener on unmount", () => {
    const { unmount } = renderHook(() => useIsMobile());

    const changeCallback = mockAddEventListener.mock.calls[0][1];

    unmount();

    expect(mockRemoveEventListener).toHaveBeenCalledWith(
      "change",
      changeCallback
    );
  });

  it("should handle multiple resize events", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    const changeCallback = mockAddEventListener.mock.calls[0][1];

    // Cambiar a móvil
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });

    act(() => {
      changeCallback();
    });

    expect(result.current).toBe(true);

    // Cambiar de vuelta a desktop
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    act(() => {
      changeCallback();
    });

    expect(result.current).toBe(false);
  });

  it("should initialize with correct value based on current window width", () => {
    // Test con diferentes anchos iniciales
    const testCases = [
      { width: 320, expected: true },
      { width: 500, expected: true },
      { width: 767, expected: true },
      { width: 768, expected: false },
      { width: 1024, expected: false },
      { width: 1920, expected: false },
    ];

    testCases.forEach(({ width, expected }) => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: width,
      });

      const { result } = renderHook(() => useIsMobile());

      expect(result.current).toBe(expected);
    });
  });
});

