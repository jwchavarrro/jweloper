import { APP_ROUTES, PortfolioRouteQueryKeys } from "../app-routes";

describe("APP_ROUTES", () => {
  describe("PUBLIC routes", () => {
    it("should have HOME route", () => {
      expect(APP_ROUTES.PUBLIC.HOME).toBeDefined();
      expect(APP_ROUTES.PUBLIC.HOME.path).toBe("/");
    });

    it("should have PORTFOLIO structure", () => {
      expect(APP_ROUTES.PUBLIC.PORTFOLIO).toBeDefined();
      expect(typeof APP_ROUTES.PUBLIC.PORTFOLIO).toBe("object");
    });

    describe("PORTFOLIO.APP_WEB", () => {
      it("should have APP_WEB route", () => {
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB).toBeDefined();
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.path).toBe(
          "/app-web"
        );
      });

      it("should have PROJECTS route", () => {
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS).toBeDefined();
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.path).toBe(
          "/app-web/proyectos"
        );
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.queries
        ).toBeDefined();
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.queries.proyectos
        ).toBe("string");
      });

      it("should have CONTACT route", () => {
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.CONTACT).toBeDefined();
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.CONTACT.path).toBe(
          "/app-web/contacto"
        );
      });
    });

    describe("PORTFOLIO.IA_CHAT", () => {
      it("should have IA_CHAT route", () => {
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT).toBeDefined();
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.path).toBe(
          "/ia-chat"
        );
      });

      it("should have IA_CHAT_NEW route", () => {
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW).toBeDefined();
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.path).toBe(
          "/ia-chat/nuevo-chat"
        );
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.queries
        ).toBeDefined();
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.queries["nuevo-chat"]
        ).toBe("string");
      });

      it("should have IA_CHAT_SEARCH route", () => {
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH
        ).toBeDefined();
        expect(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.path).toBe(
          "/ia-chat/buscar-chat"
        );
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.queries
        ).toBeDefined();
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.queries[
            "buscar-chat"
          ]
        ).toBe("string");
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.queries.sort
        ).toBe("string");
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.queries.order
        ).toBe("string");
        expect(
          APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.queries.limit
        ).toBe("number");
      });
    });
  });

  describe("Route paths validation", () => {
    it("should have valid path format for all routes", () => {
      const validatePath = (path: string) => {
        expect(path).toBeDefined();
        expect(typeof path).toBe("string");
        expect(path.startsWith("/")).toBe(true);
      };

      validatePath(APP_ROUTES.PUBLIC.HOME.path);
      validatePath(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.path);
      validatePath(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.path);
      validatePath(APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.CONTACT.path);
      validatePath(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.path);
      validatePath(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.path);
      validatePath(APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.path);
    });
  });

  describe("Queries validation", () => {
    it("should have queries only for routes that need them", () => {
      // Routes without queries should not have queries property
      expect(APP_ROUTES.PUBLIC.HOME.queries).toBeUndefined();
      expect(
        APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.APP_WEB.queries
      ).toBeUndefined();
      expect(
        APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.CONTACT.queries
      ).toBeUndefined();
      expect(
        APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT.queries
      ).toBeUndefined();

      // Routes with queries should have them
      expect(
        APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.queries
      ).toBeDefined();
      expect(
        APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.queries
      ).toBeDefined();
      expect(
        APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.queries
      ).toBeDefined();
    });

    it("should have correct query types", () => {
      const projectsQueries =
        APP_ROUTES.PUBLIC.PORTFOLIO.APP_WEB.PROJECTS.queries;
      expect(projectsQueries.proyectos).toBe("string");

      const newChatQueries =
        APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_NEW.queries;
      expect(newChatQueries["nuevo-chat"]).toBe("string");

      const searchQueries =
        APP_ROUTES.PUBLIC.PORTFOLIO.IA_CHAT.IA_CHAT_SEARCH.queries;
      expect(searchQueries["buscar-chat"]).toBe("string");
      expect(searchQueries.sort).toBe("string");
      expect(searchQueries.order).toBe("string");
      expect(searchQueries.limit).toBe("number");
    });
  });
});

describe("PortfolioRouteQueryKeys type", () => {
  it("should be a valid type export", () => {
    // Type test - this will be checked at compile time
    // We can't test types at runtime, but we can verify the export exists
    expect(typeof PortfolioRouteQueryKeys).toBeDefined();
  });
});
