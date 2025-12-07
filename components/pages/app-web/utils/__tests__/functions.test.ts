import { getTechnologyIcon } from "../functions";
import { EnumSkills } from "@/app/utils/types";
import { APP_WEB_ICONS } from "../constants";

describe("getTechnologyIcon", () => {
  it("should return icon for React", () => {
    const icon = getTechnologyIcon("React");
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.React]);
  });

  it("should return icon for JavaScript", () => {
    const icon = getTechnologyIcon("JavaScript");
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.JavaScript]);
  });

  it("should return icon for TypeScript", () => {
    const icon = getTechnologyIcon("TypeScript");
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.TypeScript]);
  });

  it("should return icon for HTML", () => {
    const icon = getTechnologyIcon("HTML");
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.HTML]);
  });

  it("should return icon for CSS", () => {
    const icon = getTechnologyIcon("CSS");
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.CSS]);
  });

  it("should return icon for Tailwind CSS variant", () => {
    const icon = getTechnologyIcon("Tailwind CSS");
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.Tailwind]);
  });

  it("should return icon for REST APIs variant", () => {
    const icon = getTechnologyIcon("REST APIs");
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.ApiRest]);
  });

  it("should return icon using enum value for Tailwind", () => {
    const icon = getTechnologyIcon(EnumSkills.Tailwind);
    expect(icon).toBe(APP_WEB_ICONS[EnumSkills.Tailwind]);
  });

  it("should return undefined for unknown technology", () => {
    const icon = getTechnologyIcon("Unknown Technology");
    expect(icon).toBeUndefined();
  });

  it("should return undefined for empty string", () => {
    const icon = getTechnologyIcon("");
    expect(icon).toBeUndefined();
  });

  it("should handle case-sensitive technology names", () => {
    const icon = getTechnologyIcon("react"); // lowercase
    expect(icon).toBeUndefined();
  });

  it("should return valid icon string when technology exists", () => {
    const icon = getTechnologyIcon("React");
    expect(icon).toBeTruthy();
    expect(typeof icon).toBe("string");
    expect(icon!.length).toBeGreaterThan(0);
  });
});
