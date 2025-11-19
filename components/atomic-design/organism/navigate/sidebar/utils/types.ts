/**
 * @file types.ts
 * @description Tipos para el sidebar.
 */

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
  icon: string;
  isActive?: boolean;
  items?: NavItem[];
};

export type NavSecondaryItem = Omit<BaseNavItem, "isActive" | "items">;

export type ChatItem = {
  name: string;
  url: string;
  icon: string;
};

export type SidebarData = {
  user: User;
  navMain: BaseNavItem[];
  navSecondary: NavSecondaryItem[];
  chats: ChatItem[];
};
