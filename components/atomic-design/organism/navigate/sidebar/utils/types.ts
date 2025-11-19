import { LucideIcon } from "lucide-react";

export type User = {
  name: string;
  email: string;
  avatar: string;
};

export type NavItem = {
  title: string;
  url: string;
};

export type BaseNavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: NavItem[];
};

export type NavSecondaryItem = Omit<BaseNavItem, "isActive" | "items">;

export type ProjectItem = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export type SidebarData = {
  user: User;
  navMain: BaseNavItem[];
  navSecondary: NavSecondaryItem[];
  projects: ProjectItem[];
};
