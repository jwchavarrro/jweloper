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
        "year",
        "project",
        "madeAt",
        "builtWith",
        "link",
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
      expect(HEADERS_ALL_PROJECTS[0]).toBe("year");
      expect(HEADERS_ALL_PROJECTS[1]).toBe("project");
      expect(HEADERS_ALL_PROJECTS[2]).toBe("madeAt");
      expect(HEADERS_ALL_PROJECTS[3]).toBe("builtWith");
      expect(HEADERS_ALL_PROJECTS[4]).toBe("link");
    });
  });
});
