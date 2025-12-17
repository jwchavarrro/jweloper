import { MENU_MAIN_ITEMS, MENU_MAIN_ITEMS_MOBILE } from "../constants";

describe("code-editor/utils/constants", () => {
  describe("MENU_MAIN_ITEMS", () => {
    it("should be defined", () => {
      expect(MENU_MAIN_ITEMS).toBeDefined();
      expect(typeof MENU_MAIN_ITEMS).toBe("object");
    });

    it("should have FILE item", () => {
      expect(MENU_MAIN_ITEMS.FILE).toBe("File");
    });

    it("should have EDIT item", () => {
      expect(MENU_MAIN_ITEMS.EDIT).toBe("Edit");
    });

    it("should have VIEW item", () => {
      expect(MENU_MAIN_ITEMS.VIEW).toBe("View");
    });

    it("should have GO item", () => {
      expect(MENU_MAIN_ITEMS.GO).toBe("Go");
    });

    it("should have RUN item", () => {
      expect(MENU_MAIN_ITEMS.RUN).toBe("Run");
    });

    it("should have TERMINAL item", () => {
      expect(MENU_MAIN_ITEMS.TERMINAL).toBe("Terminal");
    });

    it("should have HELP item", () => {
      expect(MENU_MAIN_ITEMS.HELP).toBe("Help");
    });

    it("should have 7 menu items", () => {
      const keys = Object.keys(MENU_MAIN_ITEMS);
      expect(keys.length).toBe(7);
    });

    it("should have all string values", () => {
      Object.values(MENU_MAIN_ITEMS).forEach((value) => {
        expect(typeof value).toBe("string");
        expect(value.length).toBeGreaterThan(0);
      });
    });
  });

  describe("MENU_MAIN_ITEMS_MOBILE", () => {
    it("should be defined", () => {
      expect(MENU_MAIN_ITEMS_MOBILE).toBeDefined();
      expect(typeof MENU_MAIN_ITEMS_MOBILE).toBe("object");
    });

    it("should have FILE item", () => {
      expect(MENU_MAIN_ITEMS_MOBILE.FILE).toBe("File");
    });

    it("should have EDIT item", () => {
      expect(MENU_MAIN_ITEMS_MOBILE.EDIT).toBe("Edit");
    });

    it("should have VIEW item", () => {
      expect(MENU_MAIN_ITEMS_MOBILE.VIEW).toBe("View");
    });

    it("should have 3 menu items for mobile", () => {
      const keys = Object.keys(MENU_MAIN_ITEMS_MOBILE);
      expect(keys.length).toBe(3);
    });

    it("should have all string values", () => {
      Object.values(MENU_MAIN_ITEMS_MOBILE).forEach((value) => {
        expect(typeof value).toBe("string");
        expect(value.length).toBeGreaterThan(0);
      });
    });

    it("should be a subset of MENU_MAIN_ITEMS", () => {
      Object.keys(MENU_MAIN_ITEMS_MOBILE).forEach((key) => {
        expect(MENU_MAIN_ITEMS).toHaveProperty(key);
        expect(MENU_MAIN_ITEMS_MOBILE[key]).toBe(MENU_MAIN_ITEMS[key]);
      });
    });
  });
});
