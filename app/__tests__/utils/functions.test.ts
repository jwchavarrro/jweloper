import { monofur, terminess, gohu } from "../../utils/functions"

// Mock de next/font/local
jest.mock("next/font/local", () => {
  return jest.fn(() => ({
    variable: "mock-font-variable",
    className: "mock-font-class",
    style: {
      fontFamily: "mock-font",
    },
  }))
})

describe("Font Functions", () => {
  describe("monofur", () => {
    it("should export monofur font", () => {
      expect(monofur).toBeDefined()
    })

    it("should have variable property", () => {
      expect(monofur).toHaveProperty("variable")
    })

    it("should have correct variable name", () => {
      expect(monofur.variable).toBe("mock-font-variable")
    })
  })

  describe("terminess", () => {
    it("should export terminess font", () => {
      expect(terminess).toBeDefined()
    })

    it("should have variable property", () => {
      expect(terminess).toHaveProperty("variable")
    })

    it("should have correct variable name", () => {
      expect(terminess.variable).toBe("mock-font-variable")
    })
  })

  describe("gohu", () => {
    it("should export gohu font", () => {
      expect(gohu).toBeDefined()
    })

    it("should have variable property", () => {
      expect(gohu).toHaveProperty("variable")
    })

    it("should have correct variable name", () => {
      expect(gohu.variable).toBe("mock-font-variable")
    })
  })

  it("should export all three fonts", () => {
    expect(monofur).toBeDefined()
    expect(terminess).toBeDefined()
    expect(gohu).toBeDefined()
  })
})

