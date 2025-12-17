import type {
  NavigationAppWebV1SectionsType,
  CardAData,
  CardBData,
} from "../types";

describe("app-web/v1/utils/types", () => {
  describe("NavigationAppWebV1SectionsType", () => {
    it("should accept valid NavigationAppWebV1SectionsType", () => {
      const section: NavigationAppWebV1SectionsType = {
        href: "#test",
        title: "Test Section",
      };
      expect(section.href).toBe("#test");
      expect(section.title).toBe("Test Section");
    });

    it("should accept href with hash", () => {
      const section: NavigationAppWebV1SectionsType = {
        href: "#sobre-mi",
        title: "Sobre Mí",
      };
      expect(section.href).toContain("#");
    });

    it("should accept any string title", () => {
      const section: NavigationAppWebV1SectionsType = {
        href: "#test",
        title: "ANY TITLE",
      };
      expect(section.title).toBe("ANY TITLE");
    });
  });

  describe("CardAData", () => {
    it("should accept valid CardAData with required fields", () => {
      const card: CardAData = {
        dates: "2020 - 2021",
        title: "Test Title",
        company: {
          name: "Test Company",
        },
        location: "Test Location",
        description: ["Description 1", "Description 2"],
      };
      expect(card.dates).toBe("2020 - 2021");
      expect(card.title).toBe("Test Title");
      expect(card.company.name).toBe("Test Company");
      expect(card.location).toBe("Test Location");
      expect(card.description.length).toBe(2);
    });

    it("should accept CardAData with optional url in company", () => {
      const card: CardAData = {
        dates: "2020 - 2021",
        title: "Test Title",
        company: {
          name: "Test Company",
          url: "https://test.com",
        },
        location: "Test Location",
        description: [],
      };
      expect(card.company.url).toBe("https://test.com");
    });

    it("should accept CardAData with optional isRemote", () => {
      const card: CardAData = {
        dates: "2020 - 2021",
        title: "Test Title",
        company: {
          name: "Test Company",
        },
        location: "Test Location",
        description: [],
        isRemote: true,
      };
      expect(card.isRemote).toBe(true);
    });

    it("should accept CardAData with optional tecnologies", () => {
      const card: CardAData = {
        dates: "2020 - 2021",
        title: "Test Title",
        company: {
          name: "Test Company",
        },
        location: "Test Location",
        description: [],
        tecnologies: ["React", "TypeScript"],
      };
      expect(card.tecnologies).toBeDefined();
      expect(card.tecnologies?.length).toBe(2);
    });
  });

  describe("CardBData", () => {
    it("should accept valid CardBData with required fields", () => {
      const card: CardBData = {
        mainImage: "https://test.com/image.jpg",
        title: "Test Title",
        url: "https://test.com",
        description: ["Description 1"],
        tecnologies: ["React"],
      };
      expect(card.mainImage).toBe("https://test.com/image.jpg");
      expect(card.title).toBe("Test Title");
      expect(card.url).toBe("https://test.com");
      expect(card.description.length).toBe(1);
      expect(card.tecnologies.length).toBe(1);
    });

    it("should accept CardBData with optional images", () => {
      const card: CardBData = {
        mainImage: "https://test.com/image.jpg",
        title: "Test Title",
        url: "https://test.com",
        description: [],
        tecnologies: [],
        images: [
          {
            src: "https://test.com/img1.jpg",
            alt: "Image 1",
          },
          {
            src: "https://test.com/img2.jpg",
            alt: "Image 2",
          },
        ],
      };
      expect(card.images).toBeDefined();
      expect(card.images?.length).toBe(2);
      expect(card.images?.[0].src).toBe("https://test.com/img1.jpg");
      expect(card.images?.[0].alt).toBe("Image 1");
    });

    it("should accept CardBData with multiple description items", () => {
      const card: CardBData = {
        mainImage: "https://test.com/image.jpg",
        title: "Test Title",
        url: "https://test.com",
        description: ["Desc 1", "Desc 2", "Desc 3"],
        tecnologies: [],
      };
      expect(card.description.length).toBe(3);
    });

    it("should accept CardBData with multiple tecnologies", () => {
      const card: CardBData = {
        mainImage: "https://test.com/image.jpg",
        title: "Test Title",
        url: "https://test.com",
        description: [],
        tecnologies: ["React", "TypeScript", "Next.js"],
      };
      expect(card.tecnologies.length).toBe(3);
    });
  });
});
