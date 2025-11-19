/**
 * @file index.test.ts
 * @description Tests para el index de config
 */

import { PAGE_ROUTER } from "../index"

describe("Config Index", () => {
  it("should export PAGE_ROUTER from index", () => {
    expect(PAGE_ROUTER).toBeDefined()
    expect(PAGE_ROUTER.PUBLIC).toBeDefined()
  })

  it("should export PAGE_ROUTER with all routes", () => {
    expect(PAGE_ROUTER.PUBLIC.HOME).toBe("/")
    expect(PAGE_ROUTER.PUBLIC.APP_WEB).toBe("/app-web")
    expect(PAGE_ROUTER.PUBLIC.IA_CHAT).toBe("/ia-chat")
  })
})

