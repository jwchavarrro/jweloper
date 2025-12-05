// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

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

// Mock IntersectionObserver para Motion
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {
    return null;
  }
  takeRecords() {
    return [];
  }
  unobserve() {
    return null;
  }
} as unknown as typeof IntersectionObserver;

// Mocks reutilizables de Next.js (ubicados en __mocks__/)
jest.mock("next/navigation");
jest.mock("next/image");
jest.mock("next/link");
