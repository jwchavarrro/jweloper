import { SOCIAL_MEDIA } from "../constants";
import { EnumSkills, EnumSocialMedia } from "../types";
import type { SocialMediaType } from "../types";

describe("app/utils/constants", () => {
  describe("SOCIAL_MEDIA", () => {
    it("should be defined", () => {
      expect(SOCIAL_MEDIA).toBeDefined();
      expect(Array.isArray(SOCIAL_MEDIA)).toBe(true);
    });

    it("should have 4 social media items", () => {
      expect(SOCIAL_MEDIA.length).toBe(4);
    });

    it("should contain valid SocialMediaType objects", () => {
      SOCIAL_MEDIA.forEach((item: SocialMediaType) => {
        expect(item).toHaveProperty("name");
        expect(item).toHaveProperty("icon");
        expect(item).toHaveProperty("url");
        expect(typeof item.name).toBe("string");
        expect(typeof item.icon).toBe("string");
        expect(typeof item.url).toBe("string");
      });
    });

    it("should have Github as first item", () => {
      expect(SOCIAL_MEDIA[0].name).toBe(EnumSkills.Github);
    });

    it("should have Linkedin as second item", () => {
      expect(SOCIAL_MEDIA[1].name).toBe(EnumSocialMedia.Linkedin);
    });

    it("should have Whatsapp as third item", () => {
      expect(SOCIAL_MEDIA[2].name).toBe(EnumSocialMedia.Whatsapp);
    });

    it("should have Email as fourth item", () => {
      expect(SOCIAL_MEDIA[3].name).toBe(EnumSocialMedia.Email);
    });

    it("should have non-empty icon strings", () => {
      SOCIAL_MEDIA.forEach((item: SocialMediaType) => {
        expect(item.icon).toBeTruthy();
        expect(item.icon.length).toBeGreaterThan(0);
      });
    });

    it("should have valid URL strings", () => {
      SOCIAL_MEDIA.forEach((item: SocialMediaType) => {
        expect(item.url).toBeTruthy();
        expect(item.url.length).toBeGreaterThan(0);
      });
    });
  });
});
