import {
  EnumTheme,
  EnumSkills,
  EnumSocialMedia,
  ThemeStateType,
  SocialMediaType,
} from "../types";

describe("app/utils/types", () => {
  describe("EnumTheme", () => {
    it("should have Light value", () => {
      expect(EnumTheme.Light).toBe("light");
    });

    it("should have Dark value", () => {
      expect(EnumTheme.Dark).toBe("dark");
    });

    it("should have all expected values", () => {
      const values = Object.values(EnumTheme);
      expect(values).toContain("light");
      expect(values).toContain("dark");
      expect(values.length).toBe(2);
    });
  });

  describe("EnumSkills", () => {
    it("should have all expected skill values", () => {
      expect(EnumSkills.HTML).toBe("HTML");
      expect(EnumSkills.CSS).toBe("CSS");
      expect(EnumSkills.JavaScript).toBe("JavaScript");
      expect(EnumSkills.Tailwind).toBe("Tailwind");
      expect(EnumSkills.TypeScript).toBe("TypeScript");
      expect(EnumSkills.React).toBe("React");
      expect(EnumSkills.Nextjs).toBe("Next.js");
      expect(EnumSkills.Git).toBe("Git");
      expect(EnumSkills.Github).toBe("Github");
      expect(EnumSkills.ApiRest).toBe("API REST");
    });

    it("should have 10 skill values", () => {
      const values = Object.values(EnumSkills);
      expect(values.length).toBe(10);
    });
  });

  describe("EnumSocialMedia", () => {
    it("should have all expected social media values", () => {
      expect(EnumSocialMedia.Github).toBe("Github");
      expect(EnumSocialMedia.Linkedin).toBe("Linkedin");
      expect(EnumSocialMedia.Whatsapp).toBe("Whatsapp");
      expect(EnumSocialMedia.Email).toBe("Email");
    });

    it("should have 4 social media values", () => {
      const values = Object.values(EnumSocialMedia);
      expect(values.length).toBe(4);
    });
  });

  describe("ThemeStateType", () => {
    it("should accept valid theme state", () => {
      const themeState: ThemeStateType = {
        theme: EnumTheme.Light,
      };
      expect(themeState.theme).toBe(EnumTheme.Light);
    });

    it("should accept dark theme", () => {
      const themeState: ThemeStateType = {
        theme: EnumTheme.Dark,
      };
      expect(themeState.theme).toBe(EnumTheme.Dark);
    });
  });

  describe("SocialMediaType", () => {
    it("should accept valid social media type with EnumSkills", () => {
      const socialMedia: SocialMediaType = {
        name: EnumSkills.Github,
        icon: "test-icon",
        url: "https://test.com",
      };
      expect(socialMedia.name).toBe(EnumSkills.Github);
      expect(socialMedia.icon).toBe("test-icon");
      expect(socialMedia.url).toBe("https://test.com");
    });

    it("should accept valid social media type with EnumSocialMedia", () => {
      const socialMedia: SocialMediaType = {
        name: EnumSocialMedia.Linkedin,
        icon: "linkedin-icon",
        url: "https://linkedin.com",
      };
      expect(socialMedia.name).toBe(EnumSocialMedia.Linkedin);
      expect(socialMedia.icon).toBe("linkedin-icon");
      expect(socialMedia.url).toBe("https://linkedin.com");
    });
  });
});
