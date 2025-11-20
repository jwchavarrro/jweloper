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
    label: string;
    icon: string;
    url: string;
  }[];
};