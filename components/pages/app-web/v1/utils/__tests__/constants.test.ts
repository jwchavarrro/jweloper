import {
  NAVIGATION_APP_WEB_V1_SECTIONS,
  EXPERIENCES_APP_WEB_V1,
  PROJECTS_APP_WEB_V1,
} from "../constants";
import type { NavigationAppWebV1SectionsType } from "../types";
import type { ExperienceType, ProjectType } from "@/components/pages/app-web";

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

  describe("EXPERIENCES_APP_WEB_V1", () => {
    it("should be defined", () => {
      expect(EXPERIENCES_APP_WEB_V1).toBeDefined();
      expect(Array.isArray(EXPERIENCES_APP_WEB_V1)).toBe(true);
    });

    it("should have at least one experience", () => {
      expect(EXPERIENCES_APP_WEB_V1.length).toBeGreaterThan(0);
    });

    it("should contain valid ExperienceType objects", () => {
      EXPERIENCES_APP_WEB_V1.forEach((experience: ExperienceType) => {
        expect(experience).toHaveProperty("dates");
        expect(experience).toHaveProperty("title");
        expect(experience).toHaveProperty("company");
        expect(experience).toHaveProperty("location");
        expect(experience).toHaveProperty("description");
        expect(typeof experience.dates).toBe("string");
        expect(typeof experience.title).toBe("string");
        expect(typeof experience.company).toBe("object");
        expect(typeof experience.location).toBe("string");
        expect(Array.isArray(experience.description)).toBe(true);
      });
    });

    it("should have valid company objects", () => {
      EXPERIENCES_APP_WEB_V1.forEach((experience: ExperienceType) => {
        expect(experience.company).toHaveProperty("name");
        expect(typeof experience.company.name).toBe("string");
      });
    });
  });

  describe("PROJECTS_APP_WEB_V1", () => {
    it("should be defined", () => {
      expect(PROJECTS_APP_WEB_V1).toBeDefined();
      expect(Array.isArray(PROJECTS_APP_WEB_V1)).toBe(true);
    });

    it("should have at least one project", () => {
      expect(PROJECTS_APP_WEB_V1.length).toBeGreaterThan(0);
    });

    it("should contain valid ProjectType objects", () => {
      PROJECTS_APP_WEB_V1.forEach((project: ProjectType) => {
        expect(project).toHaveProperty("image");
        expect(project).toHaveProperty("name");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("url");
        expect(project).toHaveProperty("tecnologies");
        expect(typeof project.image).toBe("string");
        expect(typeof project.name).toBe("string");
        expect(typeof project.description).toBe("string");
        expect(typeof project.url).toBe("string");
        expect(Array.isArray(project.tecnologies)).toBe(true);
      });
    });

    it("should have non-empty tecnologies arrays", () => {
      PROJECTS_APP_WEB_V1.forEach((project: ProjectType) => {
        expect(project.tecnologies.length).toBeGreaterThan(0);
        project.tecnologies.forEach((tech) => {
          expect(typeof tech).toBe("string");
        });
      });
    });
  });
});
