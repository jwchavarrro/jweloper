import { renderHook, act } from "@testing-library/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useQueryParams } from "../use-query-params";

const mockPush = jest.fn();
const mockRouter = {
  push: mockPush,
};

describe("useQueryParams", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue("/test");
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("?tab=settings&filter=active")
    );
  });

  describe("get", () => {
    it("should get a query parameter value", () => {
      const { result } = renderHook(() => useQueryParams());

      expect(result.current.get("tab")).toBe("settings");
      expect(result.current.get("filter")).toBe("active");
    });

    it("should return null for non-existent query parameter", () => {
      const { result } = renderHook(() => useQueryParams());

      expect(result.current.get("nonexistent")).toBeNull();
    });
  });

  describe("getAll", () => {
    it("should get all query parameters as an object", () => {
      const { result } = renderHook(() => useQueryParams());

      const allParams = result.current.getAll();

      expect(allParams).toEqual({
        tab: "settings",
        filter: "active",
      });
    });

    it("should return empty object when no query parameters exist", () => {
      (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());

      const { result } = renderHook(() => useQueryParams());

      expect(result.current.getAll()).toEqual({});
    });
  });

  describe("set", () => {
    it("should set a query parameter", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.set("tab", "profile");
      });

      expect(mockPush).toHaveBeenCalledWith("/test?tab=profile&filter=active", {
        scroll: false,
      });
    });

    it("should update existing query parameter", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.set("tab", "new-value");
      });

      expect(mockPush).toHaveBeenCalledWith("/test?tab=new-value&filter=active", {
        scroll: false,
      });
    });

    it("should remove query parameter when value is null", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.set("tab", null);
      });

      expect(mockPush).toHaveBeenCalledWith("/test?filter=active", {
        scroll: false,
      });
    });

    it("should remove query parameter when value is undefined", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.set("tab", undefined);
      });

      expect(mockPush).toHaveBeenCalledWith("/test?filter=active", {
        scroll: false,
      });
    });

    it("should remove query parameter when value is empty string", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.set("tab", "");
      });

      expect(mockPush).toHaveBeenCalledWith("/test?filter=active", {
        scroll: false,
      });
    });

    it("should handle number values", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.set("limit", 10);
      });

      expect(mockPush).toHaveBeenCalledWith("/test?tab=settings&filter=active&limit=10", {
        scroll: false,
      });
    });
  });

  describe("remove", () => {
    it("should remove a query parameter", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.remove("tab");
      });

      expect(mockPush).toHaveBeenCalledWith("/test?filter=active", {
        scroll: false,
      });
    });

    it("should handle removing non-existent parameter", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.remove("nonexistent");
      });

      expect(mockPush).toHaveBeenCalledWith("/test?tab=settings&filter=active", {
        scroll: false,
      });
    });
  });

  describe("setMultiple", () => {
    it("should set multiple query parameters at once", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.setMultiple({
          tab: "new-tab",
          filter: "new-filter",
          newParam: "value",
        });
      });

      expect(mockPush).toHaveBeenCalledWith(
        "/test?tab=new-tab&filter=new-filter&newParam=value",
        { scroll: false }
      );
    });

    it("should remove parameters when set to null", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.setMultiple({
          tab: null,
          filter: "new-filter",
        });
      });

      expect(mockPush).toHaveBeenCalledWith("/test?filter=new-filter", {
        scroll: false,
      });
    });

    it("should handle mixed updates and removals", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.setMultiple({
          tab: "updated",
          filter: null,
          newParam: "new",
        });
      });

      expect(mockPush).toHaveBeenCalledWith("/test?tab=updated&newParam=new", {
        scroll: false,
      });
    });
  });

  describe("clear", () => {
    it("should clear all query parameters", () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.clear();
      });

      expect(mockPush).toHaveBeenCalledWith("/test", { scroll: false });
    });
  });
});

