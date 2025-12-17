import * as React from "react";
import type { CarouselItemProps, CarouselProps } from "../types";

describe("carousel/utils/types", () => {
  describe("CarouselItemProps", () => {
    it("should accept valid CarouselItemProps with required fields", () => {
      const item: CarouselItemProps = {
        content: <div>Test Content</div>,
      };
      expect(item.content).toBeDefined();
    });

    it("should accept CarouselItemProps with id", () => {
      const item: CarouselItemProps = {
        id: "test-id",
        content: <div>Test Content</div>,
      };
      expect(item.id).toBe("test-id");
      expect(item.content).toBeDefined();
    });

    it("should accept CarouselItemProps with className", () => {
      const item: CarouselItemProps = {
        content: <div>Test Content</div>,
        className: "custom-class",
      };
      expect(item.className).toBe("custom-class");
    });

    it("should accept CarouselItemProps with all optional fields", () => {
      const item: CarouselItemProps = {
        id: "test-id",
        content: <div>Test Content</div>,
        className: "custom-class",
      };
      expect(item.id).toBe("test-id");
      expect(item.content).toBeDefined();
      expect(item.className).toBe("custom-class");
    });
  });

  describe("CarouselProps", () => {
    it("should accept valid CarouselProps with required items", () => {
      const props: CarouselProps = {
        items: [
          {
            content: <div>Item 1</div>,
          },
        ],
      };
      expect(props.items).toBeDefined();
      expect(props.items.length).toBe(1);
    });

    it("should accept CarouselProps with orientation", () => {
      const props: CarouselProps = {
        items: [{ content: <div>Item</div> }],
        orientation: "vertical",
      };
      expect(props.orientation).toBe("vertical");
    });

    it("should accept CarouselProps with horizontal orientation", () => {
      const props: CarouselProps = {
        items: [{ content: <div>Item</div> }],
        orientation: "horizontal",
      };
      expect(props.orientation).toBe("horizontal");
    });

    it("should accept CarouselProps with contentClassName", () => {
      const props: CarouselProps = {
        items: [{ content: <div>Item</div> }],
        contentClassName: "content-class",
      };
      expect(props.contentClassName).toBe("content-class");
    });

    it("should accept CarouselProps with itemClassName", () => {
      const props: CarouselProps = {
        items: [{ content: <div>Item</div> }],
        itemClassName: "item-class",
      };
      expect(props.itemClassName).toBe("item-class");
    });

    it("should accept CarouselProps with showNavigation", () => {
      const props: CarouselProps = {
        items: [{ content: <div>Item</div> }],
        showNavigation: false,
      };
      expect(props.showNavigation).toBe(false);
    });

    it("should accept CarouselProps with setApi callback", () => {
      const mockSetApi = jest.fn();
      const props: CarouselProps = {
        items: [{ content: <div>Item</div> }],
        setApi: mockSetApi,
      };
      expect(props.setApi).toBe(mockSetApi);
    });

    it("should accept CarouselProps with onSelect callback", () => {
      const mockOnSelect = jest.fn();
      const props: CarouselProps = {
        items: [{ content: <div>Item</div> }],
        onSelect: mockOnSelect,
      };
      expect(props.onSelect).toBe(mockOnSelect);
    });

    it("should accept CarouselProps with multiple items", () => {
      const props: CarouselProps = {
        items: [
          { content: <div>Item 1</div> },
          { content: <div>Item 2</div> },
          { content: <div>Item 3</div> },
        ],
      };
      expect(props.items.length).toBe(3);
    });
  });
});
