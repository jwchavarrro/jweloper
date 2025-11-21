/**
 * @file types.test.ts
 * @description Tests para los tipos del componente Breadcrumb
 */

import type { BreadcrumbItem, BreadcrumbProps } from "../types";

describe("Breadcrumb Types", () => {
  describe("BreadcrumbItem", () => {
    it("should have required properties", () => {
      const item: BreadcrumbItem = {
        label: "Test",
        href: "/test",
      };
      expect(item.label).toBe("Test");
      expect(item.href).toBe("/test");
    });

    it("should support optional disabled property", () => {
      const item: BreadcrumbItem = {
        label: "Test",
        href: "/test",
        disabled: true,
      };
      expect(item.disabled).toBe(true);
    });

    it("should support disabled as false", () => {
      const item: BreadcrumbItem = {
        label: "Test",
        href: "/test",
        disabled: false,
      };
      expect(item.disabled).toBe(false);
    });
  });

  describe("BreadcrumbProps", () => {
    it("should support items prop", () => {
      const props: BreadcrumbProps = {
        items: [
          { label: "Home", href: "/" },
          { label: "Test", href: "/test" },
        ],
      };
      expect(props.items).toHaveLength(2);
    });

    it("should support separator prop", () => {
      const props: BreadcrumbProps = {
        separator: ">",
      };
      expect(props.separator).toBe(">");
    });

    it("should support className prop", () => {
      const props: BreadcrumbProps = {
        className: "custom-class",
      };
      expect(props.className).toBe("custom-class");
    });

    it("should support excludeRoutes prop", () => {
      const props: BreadcrumbProps = {
        excludeRoutes: ["/admin", "/private"],
      };
      expect(props.excludeRoutes).toEqual(["/admin", "/private"]);
    });

    it("should support disabledRoutes prop", () => {
      const props: BreadcrumbProps = {
        disabledRoutes: ["/disabled"],
      };
      expect(props.disabledRoutes).toEqual(["/disabled"]);
    });

    it("should support all props together", () => {
      const props: BreadcrumbProps = {
        items: [{ label: "Home", href: "/" }],
        separator: ">",
        className: "custom",
        excludeRoutes: ["/admin"],
        disabledRoutes: ["/disabled"],
      };
      expect(props.items).toBeDefined();
      expect(props.separator).toBe(">");
      expect(props.className).toBe("custom");
      expect(props.excludeRoutes).toEqual(["/admin"]);
      expect(props.disabledRoutes).toEqual(["/disabled"]);
    });
  });
});
