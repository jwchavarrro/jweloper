/**
 * @file constants.test.ts
 * @description Tests para las constantes de proyectos.
 */

import { HEADERS_ALL_PROJECTS } from "../constants";

describe("proyectos/utils/constants", () => {
  describe("HEADERS_ALL_PROJECTS", () => {
    it("should be defined", () => {
      expect(HEADERS_ALL_PROJECTS).toBeDefined();
      expect(Array.isArray(HEADERS_ALL_PROJECTS)).toBe(true);
    });

    it("should have 5 headers", () => {
      expect(HEADERS_ALL_PROJECTS.length).toBe(5);
    });

    it("should contain all required headers", () => {
      const expectedHeaders = [
        "Año",
        "Proyecto",
        "Hecho en",
        "Construido con",
        "Enlace",
      ];
      expectedHeaders.forEach((header) => {
        expect(HEADERS_ALL_PROJECTS).toContain(header);
      });
    });

    it("should have all headers as strings", () => {
      HEADERS_ALL_PROJECTS.forEach((header) => {
        expect(typeof header).toBe("string");
        expect(header.length).toBeGreaterThan(0);
      });
    });

    it("should have headers in correct order", () => {
      expect(HEADERS_ALL_PROJECTS[0]).toBe("Año");
      expect(HEADERS_ALL_PROJECTS[1]).toBe("Proyecto");
      expect(HEADERS_ALL_PROJECTS[2]).toBe("Hecho en");
      expect(HEADERS_ALL_PROJECTS[3]).toBe("Construido con");
      expect(HEADERS_ALL_PROJECTS[4]).toBe("Enlace");
    });
  });
});
