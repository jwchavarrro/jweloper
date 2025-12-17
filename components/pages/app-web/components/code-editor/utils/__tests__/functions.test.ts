import { getDisplayData } from "../functions";
import type { FileItem, Language } from "../types";

describe("code-editor/utils/functions", () => {
  describe("getDisplayData", () => {
    const defaultCode = "// default code";
    const defaultLanguage: Language = "javascript";

    it("should return default code and language when files array is empty", () => {
      const files: FileItem[] = [];
      const result = getDisplayData(files, defaultCode, defaultLanguage);

      expect(result.code).toBe(defaultCode);
      expect(result.language).toBe(defaultLanguage);
    });

    it("should return first file content and language when files array has items", () => {
      const files: FileItem[] = [
        {
          name: "test.ts",
          content: "const test = 'hello';",
          language: "typescript",
        },
      ];
      const result = getDisplayData(files, defaultCode, defaultLanguage);

      expect(result.code).toBe("const test = 'hello';");
      expect(result.language).toBe("typescript");
    });

    it("should return empty string when first file has no content", () => {
      const files: FileItem[] = [
        {
          name: "test.ts",
          content: "",
          language: "typescript",
        },
      ];
      const result = getDisplayData(files, defaultCode, defaultLanguage);

      expect(result.code).toBe("");
      expect(result.language).toBe("typescript");
    });

    it("should return default language when first file has no language", () => {
      const files: FileItem[] = [
        {
          name: "test.ts",
          content: "const test = 'hello';",
          language: "javascript" as Language,
        },
      ];
      const result = getDisplayData(files, defaultCode, defaultLanguage);

      expect(result.code).toBe("const test = 'hello';");
      expect(result.language).toBe("javascript");
    });

    it("should handle multiple files and return first file data", () => {
      const files: FileItem[] = [
        {
          name: "file1.ts",
          content: "const file1 = 'first';",
          language: "typescript",
        },
        {
          name: "file2.js",
          content: "const file2 = 'second';",
          language: "javascript",
        },
      ];
      const result = getDisplayData(files, defaultCode, defaultLanguage);

      expect(result.code).toBe("const file1 = 'first';");
      expect(result.language).toBe("typescript");
    });

    it("should handle different language types", () => {
      const languages: Language[] = [
        "javascript",
        "typescript",
        "css",
        "html",
        "json",
        "plaintext",
      ];

      languages.forEach((lang) => {
        const files: FileItem[] = [
          {
            name: "test",
            content: "test content",
            language: lang,
          },
        ];
        const result = getDisplayData(files, defaultCode, defaultLanguage);

        expect(result.language).toBe(lang);
      });
    });
  });
});
