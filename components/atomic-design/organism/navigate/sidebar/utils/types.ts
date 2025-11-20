/**
 * @file types.ts
 * @description Tipos para el sidebar.
 */

/**
 * @name UserType
 * @type {Object}
 * @description Tipo para el usuario.
 */
export type UserType = {
  name: string;
  email: string;
  avatar: string;
};

/**
 * @name NavItemType
 * @type {Object}
 * @description Tipo para el item de navegación.
 */
export type NavItemType = {
  title: string;
  url: string;
};

/**
 * @name BaseNavItemType
 * @type {Object}
 * @description Tipo para el item de navegación base.
 */
export type BaseNavItemType = {
  title: string;
  url: string;
  icon: string;
  isActive?: boolean;
  items?: NavItemType[];
};

/**
 * @name NavSecondaryItemType
 * @type {Object}
 * @description Tipo para el item de navegación secundario.
 */
export type NavSecondaryItemType = Omit<BaseNavItemType, "isActive" | "items">;

/**
 * @name ChatItemType
 * @type {Object}
 * @description Tipo para el item de chat.
 */
export type ChatItemType = {
  name: string;
  url: string;
  icon: string;
};

/**
 * @name SidebarDataType
 * @type {Object}
 * @description Tipo para los datos del sidebar.
 */
export type SidebarDataType = {
  user: UserType;
  navMain: BaseNavItemType[];
  navSecondary: NavSecondaryItemType[];
  chats: ChatItemType[];
};
