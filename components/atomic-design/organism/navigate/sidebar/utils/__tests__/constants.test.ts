import { SIDEBAR_DATA, SIDEBAR_ICONS } from "../constants";

describe("Sidebar Constants", () => {
  describe("SIDEBAR_ICONS", () => {
    it("should contain all required icons", () => {
      expect(SIDEBAR_ICONS).toBeDefined();
      expect(typeof SIDEBAR_ICONS).toBe("object");
    });

    it("should have SquareTerminal icon", () => {
      expect(SIDEBAR_ICONS.SquareTerminal).toBeDefined();
    });

    it("should have LifeBuoy icon", () => {
      expect(SIDEBAR_ICONS.LifeBuoy).toBeDefined();
    });

    it("should have Send icon", () => {
      expect(SIDEBAR_ICONS.Send).toBeDefined();
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
    it("should have user data", () => {
      expect(SIDEBAR_DATA.user).toBeDefined();
      expect(SIDEBAR_DATA.user).toHaveProperty("name");
      expect(SIDEBAR_DATA.user).toHaveProperty("email");
      expect(SIDEBAR_DATA.user).toHaveProperty("avatar");
    });

    it("should have navMain array", () => {
      expect(SIDEBAR_DATA.navMain).toBeDefined();
      expect(Array.isArray(SIDEBAR_DATA.navMain)).toBe(true);
    });

    it("should have navSecondary array", () => {
      expect(SIDEBAR_DATA.navSecondary).toBeDefined();
      expect(Array.isArray(SIDEBAR_DATA.navSecondary)).toBe(true);
    });

    it("should have chats array", () => {
      expect(SIDEBAR_DATA.chats).toBeDefined();
      expect(Array.isArray(SIDEBAR_DATA.chats)).toBe(true);
    });

    it("should have valid navMain items", () => {
      SIDEBAR_DATA.navMain.forEach((item) => {
        expect(item).toHaveProperty("title");
        expect(item).toHaveProperty("url");
        expect(item).toHaveProperty("icon");
      });
    });

    it("should have valid navSecondary items", () => {
      SIDEBAR_DATA.navSecondary.forEach((item) => {
        expect(item).toHaveProperty("title");
        expect(item).toHaveProperty("url");
        expect(item).toHaveProperty("icon");
      });
    });

    it("should have valid chats items", () => {
      SIDEBAR_DATA.chats.forEach((item) => {
        expect(item).toHaveProperty("name");
        expect(item).toHaveProperty("url");
        expect(item).toHaveProperty("icon");
      });
    });
  });
});
