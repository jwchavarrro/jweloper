// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mocks reutilizables de Next.js (ubicados en __mocks__/)
jest.mock("next/navigation");
jest.mock("next/image");
jest.mock("next/link");

// Mock window.matchMedia (configuración global del entorno de pruebas)
Object.defineProperty(globalThis, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver para Motion (Framer Motion)
globalThis.IntersectionObserver = class IntersectionObserver {
  private readonly callback: IntersectionObserverCallback;
  private readonly options?: IntersectionObserverInit;

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.callback = callback;
    this.options = options;
  }

  disconnect() {
    // no-op
  }

  observe() {
    // no-op
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve() {
    // no-op
  }
} as unknown as typeof IntersectionObserver;

// Suprimir el warning de React sobre <html> en tests
const originalError = console.error;
const filteredError = (...args: unknown[]) => {
  const firstArg = args[0];
  if (
    typeof firstArg === "string" &&
    firstArg.includes("In HTML, <html> cannot be a child of <div>")
  ) {
    return;
  }
  originalError.apply(console, args);
};
console.error = filteredError;
