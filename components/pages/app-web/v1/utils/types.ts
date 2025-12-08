/**
 * @file types.ts
 * @description Tipos para la versión 1 de la página principal.
 */

/**
 * @name NavigationAppWebV1SectionsType
 * @type {Object}
 * @description Tipo para las secciones de la navegación de la versión 1 de la página principal.
 */
export type NavigationAppWebV1SectionsType = {
  id: string;
  href: string;
  title: string;
};

/**
 * @name CardAData
 * @type {Object}
 * @description Tipo para los datos de la card A.
 */
export type CardAData = {
  dates: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
  location: string;
  isRemote?: boolean;
  description: string[];
  technologies?: string[];
};
