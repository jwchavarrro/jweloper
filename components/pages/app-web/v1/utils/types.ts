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
  tecnologies?: string[];
};

/**
 * @name CardBData
 * @type {Object}
 * @description Tipo para los datos de la card B.
 */
export type CardBData = {
  images?: {
    src: string;
    alt: string;
  }[];
  mainImage: string;
  title: string;
  url: string;
  description: string[];
  tecnologies: string[];
};
