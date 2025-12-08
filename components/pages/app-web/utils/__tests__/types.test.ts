import { SkillType } from "../types";
import { SKILLS } from "../constants";
import { EnumSkills } from "@/app/utils/types";

describe("SkillType", () => {
  describe("Type validation", () => {
    it("should validate that SKILLS array contains valid SkillType objects", () => {
      SKILLS.forEach((skill: SkillType) => {
        expect(skill).toHaveProperty("name");
        expect(skill).toHaveProperty("icon");
        expect(skill).toHaveProperty("experience");
        expect(typeof skill.name).toBe("string");
        expect(typeof skill.icon).toBe("string");
        expect(typeof skill.experience).toBe("string");
      });
    });

    it("should have valid name values from EnumSkills", () => {
      const validNames = Object.values(EnumSkills);
      SKILLS.forEach((skill: SkillType) => {
        expect(validNames).toContain(skill.name);
      });
    });

    it("should have non-empty icon strings", () => {
      SKILLS.forEach((skill: SkillType) => {
        expect(skill.icon).toBeTruthy();
        expect(skill.icon.length).toBeGreaterThan(0);
      });
    });

    it("should have non-empty experience strings", () => {
      SKILLS.forEach((skill: SkillType) => {
        expect(skill.experience).toBeTruthy();
        expect(skill.experience.length).toBeGreaterThan(0);
      });
    });

    it("should have unique skill names", () => {
      const names = SKILLS.map((skill: SkillType) => skill.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });
  });
});
