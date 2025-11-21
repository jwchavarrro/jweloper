import { getSidebarIcon } from "../functions";
import { SIDEBAR_ICONS } from "../constants";

describe("getSidebarIcon", () => {
  it("should return icon when icon name exists", () => {
    const icon = getSidebarIcon("SquareTerminal");
    expect(icon).toBeDefined();
    expect(icon).toBe(SIDEBAR_ICONS.SquareTerminal);
  });

  it("should return default icon when icon name does not exist", () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation();

    const icon = getSidebarIcon("NonExistentIcon");

    expect(icon).toBeDefined();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Icon "NonExistentIcon" not found in SIDEBAR_ICONS'
    );

    consoleSpy.mockRestore();
  });

  it("should return correct icon for all available icons", () => {
    Object.keys(SIDEBAR_ICONS).forEach((iconName) => {
      const icon = getSidebarIcon(iconName);
      expect(icon).toBe(SIDEBAR_ICONS[iconName]);
    });
  });
});
