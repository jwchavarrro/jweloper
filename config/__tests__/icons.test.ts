import { ICONS } from "../icons";
import { EnumSkills, EnumSocialMedia } from "@/app/utils/types";

describe("config/icons", () => {
  describe("ICONS", () => {
    it("should be defined", () => {
      expect(ICONS).toBeDefined();
      expect(typeof ICONS).toBe("object");
    });

    it("should have icon for HTML", () => {
      expect(ICONS[EnumSkills.HTML]).toBeDefined();
      expect(typeof ICONS[EnumSkills.HTML]).toBe("string");
    });

    it("should have icon for CSS", () => {
      expect(ICONS[EnumSkills.CSS]).toBeDefined();
      expect(typeof ICONS[EnumSkills.CSS]).toBe("string");
    });

    it("should have icon for JavaScript", () => {
      expect(ICONS[EnumSkills.JavaScript]).toBeDefined();
      expect(typeof ICONS[EnumSkills.JavaScript]).toBe("string");
    });

    it("should have icon for TypeScript", () => {
      expect(ICONS[EnumSkills.TypeScript]).toBeDefined();
      expect(typeof ICONS[EnumSkills.TypeScript]).toBe("string");
    });

    it("should have icon for React", () => {
      expect(ICONS[EnumSkills.React]).toBeDefined();
      expect(typeof ICONS[EnumSkills.React]).toBe("string");
    });

    it("should have icon for Next.js", () => {
      expect(ICONS[EnumSkills.Nextjs]).toBeDefined();
      expect(typeof ICONS[EnumSkills.Nextjs]).toBe("string");
    });

    it("should have icon for Tailwind", () => {
      expect(ICONS[EnumSkills.Tailwind]).toBeDefined();
      expect(typeof ICONS[EnumSkills.Tailwind]).toBe("string");
    });

    it("should have icon for Git", () => {
      expect(ICONS[EnumSkills.Git]).toBeDefined();
      expect(typeof ICONS[EnumSkills.Git]).toBe("string");
    });

    it("should have icon for Github", () => {
      expect(ICONS[EnumSkills.Github]).toBeDefined();
      expect(typeof ICONS[EnumSkills.Github]).toBe("string");
    });

    it("should have icon for API REST", () => {
      expect(ICONS[EnumSkills.ApiRest]).toBeDefined();
      expect(typeof ICONS[EnumSkills.ApiRest]).toBe("string");
    });

    it("should have icon for Linkedin", () => {
      expect(ICONS[EnumSocialMedia.Linkedin]).toBeDefined();
      expect(typeof ICONS[EnumSocialMedia.Linkedin]).toBe("string");
    });

    it("should have icon for Whatsapp", () => {
      expect(ICONS[EnumSocialMedia.Whatsapp]).toBeDefined();
      expect(typeof ICONS[EnumSocialMedia.Whatsapp]).toBe("string");
    });

    it("should have icon for Email", () => {
      expect(ICONS[EnumSocialMedia.Email]).toBeDefined();
      expect(typeof ICONS[EnumSocialMedia.Email]).toBe("string");
    });

    it("should have non-empty icon strings", () => {
      Object.values(ICONS).forEach((icon) => {
        expect(icon).toBeTruthy();
        expect(icon.length).toBeGreaterThan(0);
      });
    });

    it("should have all expected keys", () => {
      const expectedKeys = [
        EnumSkills.HTML,
        EnumSkills.CSS,
        EnumSkills.JavaScript,
        EnumSkills.TypeScript,
        EnumSkills.React,
        EnumSkills.Nextjs,
        EnumSkills.Tailwind,
        EnumSkills.Git,
        EnumSkills.Github,
        EnumSkills.ApiRest,
        EnumSocialMedia.Linkedin,
        EnumSocialMedia.Whatsapp,
        EnumSocialMedia.Email,
      ];

      expectedKeys.forEach((key) => {
        expect(key in ICONS).toBe(true);
        expect(ICONS[key]).toBeDefined();
        expect(typeof ICONS[key]).toBe("string");
      });
    });
  });
});
