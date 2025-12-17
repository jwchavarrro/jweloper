import * as React from "react";
import type { Language, FileItem, CodeEditorProps } from "../types";

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

  describe("CodeEditorProps", () => {
    it("should accept valid CodeEditorProps with all optional fields", () => {
      const props: CodeEditorProps = {
        code: "const test = 'hello';",
        language: "typescript",
        showSidebar: true,
        files: [
          {
            name: "test.ts",
            content: "const test = 'hello';",
            language: "typescript",
          },
        ],
        minHeight: "400px",
        className: "custom-class",
      };
      expect(props.code).toBe("const test = 'hello';");
      expect(props.language).toBe("typescript");
      expect(props.showSidebar).toBe(true);
      expect(props.files).toBeDefined();
      expect(props.minHeight).toBe("400px");
      expect(props.className).toBe("custom-class");
    });

    it("should accept CodeEditorProps with only code", () => {
      const props: CodeEditorProps = {
        code: "const test = 'hello';",
      };
      expect(props.code).toBe("const test = 'hello';");
    });

    it("should accept CodeEditorProps with only language", () => {
      const props: CodeEditorProps = {
        language: "typescript",
      };
      expect(props.language).toBe("typescript");
    });

    it("should accept CodeEditorProps with showSidebar false", () => {
      const props: CodeEditorProps = {
        showSidebar: false,
      };
      expect(props.showSidebar).toBe(false);
    });

    it("should accept CodeEditorProps with files array", () => {
      const props: CodeEditorProps = {
        files: [
          {
            name: "file1.ts",
            content: "content1",
            language: "typescript",
          },
          {
            name: "file2.js",
            content: "content2",
            language: "javascript",
          },
        ],
      };
      expect(props.files?.length).toBe(2);
    });

    it("should accept CodeEditorProps with minHeight", () => {
      const props: CodeEditorProps = {
        minHeight: "500px",
      };
      expect(props.minHeight).toBe("500px");
    });

    it("should accept CodeEditorProps with className", () => {
      const props: CodeEditorProps = {
        className: "editor-class",
      };
      expect(props.className).toBe("editor-class");
    });
  });
});
