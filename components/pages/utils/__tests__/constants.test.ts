import { HOME_DATA, HOME_ICONS } from "../constants";

describe("Home Constants", () => {
  describe("HOME_ICONS", () => {
    it("should be defined", () => {
      expect(HOME_ICONS).toBeDefined();
      expect(typeof HOME_ICONS).toBe("object");
    });

    it("should have LayoutTemplate icon", () => {
      expect(HOME_ICONS.LayoutTemplate).toBeDefined();
      // Los iconos de lucide-react son componentes React (objetos)
      expect(typeof HOME_ICONS.LayoutTemplate).toBe("object");
    });

    it("should have SquareTerminal icon", () => {
      expect(HOME_ICONS.SquareTerminal).toBeDefined();
      // Los iconos de lucide-react son componentes React (objetos)
      expect(typeof HOME_ICONS.SquareTerminal).toBe("object");
    });
  });

  describe("HOME_DATA", () => {
    it("should be defined", () => {
      expect(HOME_DATA).toBeDefined();
      expect(typeof HOME_DATA).toBe("object");
    });

    it("should have buttons array", () => {
      expect(HOME_DATA.buttons).toBeDefined();
      expect(Array.isArray(HOME_DATA.buttons)).toBe(true);
      expect(HOME_DATA.buttons.length).toBeGreaterThan(0);
    });

    it("should have valid button structure", () => {
      HOME_DATA.buttons.forEach((button) => {
        expect(button).toHaveProperty("label");
        expect(button).toHaveProperty("icon");
        expect(button).toHaveProperty("url");
        expect(typeof button.label).toBe("string");
        expect(typeof button.icon).toBe("string");
        expect(typeof button.url).toBe("string");
      });
    });

    it("should have CV en aplicativo button", () => {
      const cvAppButton = HOME_DATA.buttons.find(
        (button) => button.label === "CV en aplicativo"
      );
      expect(cvAppButton).toBeDefined();
      expect(cvAppButton?.icon).toBe("LayoutTemplate");
      expect(cvAppButton?.url).toBe("/app-web");
    });

    it("should have CV con IA button", () => {
      const cvIAButton = HOME_DATA.buttons.find(
        (button) => button.label === "CV con IA"
      );
      expect(cvIAButton).toBeDefined();
      expect(cvIAButton?.icon).toBe("SquareTerminal");
      expect(cvIAButton?.url).toBe("/ia-chat/nuevo-chat");
    });

    it("should have valid icon names that exist in HOME_ICONS", () => {
      HOME_DATA.buttons.forEach((button) => {
        expect(HOME_ICONS).toHaveProperty(button.icon);
      });
    });

    it("should have valid URL paths", () => {
      HOME_DATA.buttons.forEach((button) => {
        expect(button.url).toMatch(/^\//);
      });
    });
  });
});
