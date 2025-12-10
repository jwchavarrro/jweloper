/**
 * @file versionSlice.test.ts
 * @description Tests para el slice de versión de Redux
 */

import versionReducer, {
  setVersion,
  toggleVersion,
  type VersionType,
} from "../versionSlice";

describe("versionSlice", () => {
  const initialState = {
    selectedVersion: "v1" as VersionType,
  };

  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    if (globalThis.window !== undefined) {
      globalThis.localStorage.clear();
    }
  });

  describe("initial state", () => {
    it("should return initial state with v1", () => {
      const state = versionReducer(undefined, { type: "unknown" });
      expect(state.selectedVersion).toBe("v1");
    });

    it("should have correct initial state structure", () => {
      const state = versionReducer(undefined, { type: "unknown" });
      expect(state).toHaveProperty("selectedVersion");
      expect(typeof state.selectedVersion).toBe("string");
      expect(["v1", "v2"]).toContain(state.selectedVersion);
    });
  });

  describe("setVersion", () => {
    it("should set version to v2", () => {
      const action = setVersion("v2");
      const state = versionReducer(initialState, action);
      expect(state.selectedVersion).toBe("v2");
    });

    it("should set version to v1", () => {
      const action = setVersion("v1");
      const state = versionReducer({ selectedVersion: "v2" }, action);
      expect(state.selectedVersion).toBe("v1");
    });

    it("should update state when setting version", () => {
      const action = setVersion("v2");
      const state = versionReducer(initialState, action);
      expect(state.selectedVersion).toBe("v2");
    });
  });

  describe("toggleVersion", () => {
    it("should toggle from v1 to v2", () => {
      const action = toggleVersion();
      const state = versionReducer(initialState, action);
      expect(state.selectedVersion).toBe("v2");
    });

    it("should toggle from v2 to v1", () => {
      const action = toggleVersion();
      const state = versionReducer({ selectedVersion: "v2" }, action);
      expect(state.selectedVersion).toBe("v1");
    });

    it("should update state when toggling version", () => {
      const action = toggleVersion();
      const state = versionReducer(initialState, action);
      expect(state.selectedVersion).toBe("v2");
    });
  });
});
