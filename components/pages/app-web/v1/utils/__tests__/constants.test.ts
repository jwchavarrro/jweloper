import { NAVIGATION_APP_WEB_V1_SECTIONS } from "../constants";
import type { NavigationAppWebV1SectionsType } from "../types";

describe("app-web/v1/utils/constants", () => {
  describe("NAVIGATION_APP_WEB_V1_SECTIONS", () => {
    it("should be defined", () => {
      expect(NAVIGATION_APP_WEB_V1_SECTIONS).toBeDefined();
      expect(Array.isArray(NAVIGATION_APP_WEB_V1_SECTIONS)).toBe(true);
    });

    it("should have 3 sections", () => {
      expect(NAVIGATION_APP_WEB_V1_SECTIONS.length).toBe(3);
    });

    it("should contain valid NavigationAppWebV1SectionsType objects", () => {
      NAVIGATION_APP_WEB_V1_SECTIONS.forEach(
        (section: NavigationAppWebV1SectionsType) => {
          expect(section).toHaveProperty("href");
          expect(section).toHaveProperty("title");
          expect(typeof section.href).toBe("string");
          expect(typeof section.title).toBe("string");
        }
      );
    });

    it("should have sobre-mi section", () => {
      const section = NAVIGATION_APP_WEB_V1_SECTIONS.find(
        (s) => s.href === "#sobre-mi"
      );
      expect(section).toBeDefined();
      expect(section?.title).toBe("SOBRE MÍ");
    });

    it("should have experiencia section", () => {
      const section = NAVIGATION_APP_WEB_V1_SECTIONS.find(
        (s) => s.href === "#experiencia"
      );
      expect(section).toBeDefined();
      expect(section?.title).toBe("EXPERIENCIA");
    });

    it("should have proyectos section", () => {
      const section = NAVIGATION_APP_WEB_V1_SECTIONS.find(
        (s) => s.href === "#proyectos"
      );
      expect(section).toBeDefined();
      expect(section?.title).toBe("PROYECTOS");
    });
  });
});
