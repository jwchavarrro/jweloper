/**
 * @file types.ts
 * @description Tipos para el componente Breadcrumb.
 */

export type BreadcrumbItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

export interface BreadcrumbProps {
  readonly items?: BreadcrumbItem[];
  readonly separator?: React.ReactNode;
  readonly className?: string;
  /**
   * Rutas a excluir completamente del breadcrumb
   * Ejemplo: ["/app-web", "/ia-chat"]
   */
  readonly excludeRoutes?: string[];
  /**
   * Rutas a deshabilitar (se muestran pero sin link)
   * Ejemplo: ["/app-web"]
   */
  readonly disabledRoutes?: string[];
}
