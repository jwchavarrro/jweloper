import { MENU_MAIN_ITEMS, MOBILE_MENU_COUNT } from "../constants";

describe("glass-code-window/utils/constants", () => {
  describe("MENU_MAIN_ITEMS", () => {
    it("should list the VS Code menu in order", () => {
      expect(MENU_MAIN_ITEMS).toEqual([
        "File",
        "Edit",
        "View",
        "Go",
        "Run",
        "Terminal",
        "Help",
      ]);
    });

    it("should have only non-empty strings", () => {
      MENU_MAIN_ITEMS.forEach((value) => {
        expect(typeof value).toBe("string");
        expect(value.length).toBeGreaterThan(0);
      });
    });
  });

  describe("MOBILE_MENU_COUNT", () => {
    it("should show the first 3 items on mobile", () => {
      expect(MOBILE_MENU_COUNT).toBe(3);
      expect(MENU_MAIN_ITEMS.slice(0, MOBILE_MENU_COUNT)).toEqual([
        "File",
        "Edit",
        "View",
      ]);
    });

    it("should not exceed the full menu", () => {
      expect(MOBILE_MENU_COUNT).toBeLessThanOrEqual(MENU_MAIN_ITEMS.length);
    });
  });
});
