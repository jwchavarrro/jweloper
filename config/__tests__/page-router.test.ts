/**
 * @file page-router.test.ts
 * @description Tests para la configuración de rutas
 */

import { PAGE_ROUTER } from "../page-router"

describe("PAGE_ROUTER", () => {
  it("should export PAGE_ROUTER object", () => {
    expect(PAGE_ROUTER).toBeDefined()
    expect(typeof PAGE_ROUTER).toBe("object")
  })

  it("should have PUBLIC property", () => {
    expect(PAGE_ROUTER.PUBLIC).toBeDefined()
    expect(typeof PAGE_ROUTER.PUBLIC).toBe("object")
  })

  it("should have HOME route", () => {
    expect(PAGE_ROUTER.PUBLIC.HOME).toBe("/")
  })

  it("should have APP_WEB route", () => {
    expect(PAGE_ROUTER.PUBLIC.APP_WEB).toBe("/app-web")
  })

  it("should have IA_CHAT route", () => {
    expect(PAGE_ROUTER.PUBLIC.IA_CHAT).toBe("/ia-chat")
  })

  it("should have all required routes", () => {
    expect(PAGE_ROUTER.PUBLIC).toHaveProperty("HOME")
    expect(PAGE_ROUTER.PUBLIC).toHaveProperty("APP_WEB")
    expect(PAGE_ROUTER.PUBLIC).toHaveProperty("IA_CHAT")
  })

  it("should have correct route values", () => {
    expect(PAGE_ROUTER.PUBLIC.HOME).toBe("/")
    expect(PAGE_ROUTER.PUBLIC.APP_WEB).toBe("/app-web")
    expect(PAGE_ROUTER.PUBLIC.IA_CHAT).toBe("/ia-chat")
  })
})

