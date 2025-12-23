import { SIDEBAR_DATA, SIDEBAR_ICONS } from "../constants";

describe("Sidebar Constants", () => {
  describe("SIDEBAR_ICONS", () => {
    it("should contain all required icons", () => {
      expect(SIDEBAR_ICONS).toBeDefined();
      expect(typeof SIDEBAR_ICONS).toBe("object");
    });

    it("should have LayoutTemplate icon", () => {
      expect(SIDEBAR_ICONS.LayoutTemplate).toBeDefined();
    });

    it("should have SquareTerminal icon", () => {
      expect(SIDEBAR_ICONS.SquareTerminal).toBeDefined();
    });

    it("should have LifeBuoy icon", () => {
      expect(SIDEBAR_ICONS.LifeBuoy).toBeDefined();
    });

    it("should have Languages icon", () => {
      expect(SIDEBAR_ICONS.Languages).toBeDefined();
    });

    it("should have Frame icon", () => {
      expect(SIDEBAR_ICONS.Frame).toBeDefined();
    });

    it("should have PieChart icon", () => {
      expect(SIDEBAR_ICONS.PieChart).toBeDefined();
    });

    it("should have Map icon", () => {
      expect(SIDEBAR_ICONS.Map).toBeDefined();
    });
  });

  describe("SIDEBAR_DATA", () => {
    it("should have navMain array", () => {
      expect(SIDEBAR_DATA.navMain).toBeDefined();
      expect(Array.isArray(SIDEBAR_DATA.navMain)).toBe(true);
    });

    it("should have valid navMain items", () => {
      SIDEBAR_DATA.navMain.forEach((item) => {
        expect(item).toHaveProperty("title");
        expect(item).toHaveProperty("url");
        expect(item).toHaveProperty("icon");
      });
    });

    it("should have navMain items with optional properties", () => {
      SIDEBAR_DATA.navMain.forEach((item) => {
        if (item.isActive !== undefined) {
          expect(typeof item.isActive).toBe("boolean");
        }
        if (item.items !== undefined) {
          expect(Array.isArray(item.items)).toBe(true);
          item.items.forEach((subItem) => {
            expect(subItem).toHaveProperty("title");
            expect(subItem).toHaveProperty("url");
          });
        }
      });
    });
  });
});
