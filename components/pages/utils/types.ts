/**
 * @file types.ts
 * @description Tipos para la página principal.
 */

/**
 * @name HomeData
 * @type {Object}
 * @description Datos de la página principal.
 */
export type HomeDataType = {
  buttons: {
    /** Clave dentro del namespace `home` */
    label: "cvApp" | "cvAi";
    icon: string;
    url: string;
  }[];
};
