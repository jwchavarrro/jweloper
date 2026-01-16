/**
 * @file functions.test.ts
 * @description Tests para las funciones de utilidad de locales
 */

import {
  hasLocale,
  getDictionary,
  getOtherLocale,
  extractLocaleFromPath,
  replaceLocaleInPath,
  generateBreadcrumbsWithLocale,
  locales,
  defaultLocale,
} from "../functions";
import { EnumLocale } from "../types";

describe("Locales Utils Functions", () => {
  describe("hasLocale", () => {
    it("should return true for valid locales", () => {
      expect(hasLocale(EnumLocale.ES)).toBe(true);
      expect(hasLocale(EnumLocale.EN)).toBe(true);
    });

    it("should return false for invalid locales", () => {
      expect(hasLocale("fr")).toBe(false);
      expect(hasLocale("de")).toBe(false);
      expect(hasLocale("")).toBe(false);
    });
  });

  describe("getDictionary", () => {
    it("should load dictionary for ES locale", async () => {
      const dictionary = await getDictionary(EnumLocale.ES);
      expect(dictionary).toBeDefined();
      expect(typeof dictionary).toBe("object");
    });

    it("should load dictionary for EN locale", async () => {
      const dictionary = await getDictionary(EnumLocale.EN);
      expect(dictionary).toBeDefined();
      expect(typeof dictionary).toBe("object");
    });
  });

  describe("getOtherLocale", () => {
    it("should return EN when current locale is ES", () => {
      expect(getOtherLocale(EnumLocale.ES)).toBe(EnumLocale.EN);
    });

    it("should return ES when current locale is EN", () => {
      expect(getOtherLocale(EnumLocale.EN)).toBe(EnumLocale.ES);
    });
  });

  describe("extractLocaleFromPath", () => {
    it("should extract ES locale from path", () => {
      expect(extractLocaleFromPath("/es/app-web")).toBe(EnumLocale.ES);
      expect(extractLocaleFromPath("/es")).toBe(EnumLocale.ES);
      expect(extractLocaleFromPath("/es/")).toBe(EnumLocale.ES);
    });

    it("should extract EN locale from path", () => {
      expect(extractLocaleFromPath("/en/app-web")).toBe(EnumLocale.EN);
      expect(extractLocaleFromPath("/en")).toBe(EnumLocale.EN);
    });

    it("should return null when no locale in path", () => {
      expect(extractLocaleFromPath("/app-web")).toBeNull();
      expect(extractLocaleFromPath("/")).toBeNull();
      expect(extractLocaleFromPath("")).toBeNull();
    });

    it("should return null for invalid locale in path", () => {
      expect(extractLocaleFromPath("/fr/app-web")).toBeNull();
      expect(extractLocaleFromPath("/de")).toBeNull();
    });
  });

  describe("replaceLocaleInPath", () => {
    it("should replace ES locale with EN in path", () => {
      expect(replaceLocaleInPath("/es/app-web", EnumLocale.EN)).toBe(
        "/en/app-web"
      );
      expect(replaceLocaleInPath("/es", EnumLocale.EN)).toBe("/en");
    });

    it("should replace EN locale with ES in path", () => {
      expect(replaceLocaleInPath("/en/app-web", EnumLocale.ES)).toBe(
        "/es/app-web"
      );
      expect(replaceLocaleInPath("/en", EnumLocale.ES)).toBe("/es");
    });

    it("should add locale when path has no locale", () => {
      expect(replaceLocaleInPath("/app-web", EnumLocale.ES)).toBe(
        "/es/app-web"
      );
      expect(replaceLocaleInPath("/app-web/proyectos", EnumLocale.EN)).toBe(
        "/en/app-web/proyectos"
      );
    });

    it("should handle root path", () => {
      expect(replaceLocaleInPath("/", EnumLocale.ES)).toBe("/es");
      expect(replaceLocaleInPath("/", EnumLocale.EN)).toBe("/en");
    });
  });

  describe("generateBreadcrumbsWithLocale", () => {
    it("should generate breadcrumbs with locale", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale("/es/app-web");
      expect(breadcrumbs).toHaveLength(2);
      expect(breadcrumbs[0]).toEqual({
        label: "Inicio",
        href: "/es",
        disabled: undefined,
      });
      expect(breadcrumbs[1]).toEqual({
        label: "App Web",
        href: "/es/app-web",
        disabled: undefined,
      });
    });

    it("should generate breadcrumbs with multiple segments", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale(
        "/es/app-web/proyectos"
      );
      expect(breadcrumbs).toHaveLength(3);
      expect(breadcrumbs[0]).toEqual({
        label: "Inicio",
        href: "/es",
        disabled: undefined,
      });
      expect(breadcrumbs[1]).toEqual({
        label: "App Web",
        href: "/es/app-web",
        disabled: undefined,
      });
      expect(breadcrumbs[2]).toEqual({
        label: "Proyectos",
        href: "/es/app-web/proyectos",
        disabled: undefined,
      });
    });

    it("should include home when path is not root", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale("/es/app-web");
      expect(breadcrumbs[0].label).toBe("Inicio");
      expect(breadcrumbs[0].href).toBe("/es");
    });

    it("should not include home when path is root", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale("/es");
      expect(breadcrumbs).toHaveLength(0);
    });

    it("should exclude routes when provided", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale(
        "/es/app-web/proyectos",
        ["/es/app-web"]
      );
      expect(breadcrumbs).toHaveLength(2);
      expect(breadcrumbs[0].label).toBe("Inicio");
      expect(breadcrumbs[1].label).toBe("Proyectos");
    });

    it("should disable routes when provided", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale(
        "/es/app-web",
        undefined,
        ["/es"]
      );
      expect(breadcrumbs[0].disabled).toBe(true);
    });

    it("should handle path without locale", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale("/app-web");
      expect(breadcrumbs).toHaveLength(2);
      expect(breadcrumbs[0].label).toBe("Inicio");
      expect(breadcrumbs[0].href).toBe("/");
      expect(breadcrumbs[1].label).toBe("App Web");
      expect(breadcrumbs[1].href).toBe("/app-web");
    });

    it("should format segment labels correctly", () => {
      const breadcrumbs = generateBreadcrumbsWithLocale(
        "/es/ia-chat/nuevo-chat"
      );
      expect(breadcrumbs).toHaveLength(3);
      expect(breadcrumbs[0].label).toBe("Inicio");
      expect(breadcrumbs[1].label).toBe("Ia Chat");
      expect(breadcrumbs[2].label).toBe("Nuevo Chat");
    });
  });

  describe("constants", () => {
    it("should have locales array", () => {
      expect(locales).toBeDefined();
      expect(Array.isArray(locales)).toBe(true);
      expect(locales).toContain(EnumLocale.ES);
      expect(locales).toContain(EnumLocale.EN);
    });

    it("should have default locale", () => {
      expect(defaultLocale).toBeDefined();
      expect(defaultLocale).toBe(EnumLocale.ES);
    });
  });
});
