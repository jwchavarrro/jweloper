import * as React from "react";
import type { Language, FileItem, GlassCodeWindowProps } from "../types";

describe("code-editor/utils/types", () => {
  describe("Language", () => {
    it("should accept javascript as valid language", () => {
      const lang: Language = "javascript";
      expect(lang).toBe("javascript");
    });

    it("should accept typescript as valid language", () => {
      const lang: Language = "typescript";
      expect(lang).toBe("typescript");
    });

    it("should accept css as valid language", () => {
      const lang: Language = "css";
      expect(lang).toBe("css");
    });

    it("should accept html as valid language", () => {
      const lang: Language = "html";
      expect(lang).toBe("html");
    });

    it("should accept json as valid language", () => {
      const lang: Language = "json";
      expect(lang).toBe("json");
    });

    it("should accept plaintext as valid language", () => {
      const lang: Language = "plaintext";
      expect(lang).toBe("plaintext");
    });
  });

  describe("FileItem", () => {
    it("should accept valid FileItem with required fields", () => {
      const file: FileItem = {
        name: "test.ts",
        content: "const test = 'hello';",
        language: "typescript",
      };
      expect(file.name).toBe("test.ts");
      expect(file.content).toBe("const test = 'hello';");
      expect(file.language).toBe("typescript");
    });

    it("should accept FileItem with optional icon", () => {
      const file: FileItem = {
        name: "test.ts",
        content: "const test = 'hello';",
        language: "typescript",
        icon: <div>Icon</div>,
      };
      expect(file.icon).toBeDefined();
    });

    it("should accept FileItem without icon", () => {
      const file: FileItem = {
        name: "test.ts",
        content: "const test = 'hello';",
        language: "typescript",
      };
      expect(file.icon).toBeUndefined();
    });
  });

  describe("GlassCodeWindowProps", () => {
    it("should require files and accept an optional className", () => {
      const props: GlassCodeWindowProps = {
        files: [
          {
            name: "test.ts",
            content: "const test = 'hello';",
            language: "typescript",
          },
        ],
        className: "custom-class",
      };
      expect(props.files).toHaveLength(1);
      expect(props.className).toBe("custom-class");
    });

    it("should accept several files", () => {
      const props: GlassCodeWindowProps = {
        files: [
          { name: "file1.ts", content: "content1", language: "typescript" },
          { name: "file2.js", content: "content2", language: "javascript" },
        ],
      };
      expect(props.files.length).toBe(2);
    });
  });
});
