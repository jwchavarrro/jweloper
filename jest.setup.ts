// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"

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
})

// Mocks reutilizables de Next.js (ubicados en __mocks__/)
jest.mock("next/navigation")
jest.mock("next/image")
jest.mock("next/link")

