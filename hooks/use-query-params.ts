/**
 * Hook personalizado para manejar query parameters en Next.js App Router
 * 
 * @returns Objeto con funciones para leer, actualizar y eliminar query params
 * 
 * @example
 * ```tsx
 * const { get, set, remove, getAll } = useQueryParams();
 * 
 * // Obtener un query param
 * const tab = get('tab'); // 'settings' o null
 * 
 * // Actualizar un query param
 * set('tab', 'profile');
 * 
 * // Eliminar un query param
 * remove('tab');
 * 
 * // Obtener todos los query params
 * const allParams = getAll();
 * ```
 */

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";


export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Obtiene el valor de un query parameter específico
   * 
   * @param key - Nombre del query parameter
   * @returns El valor del query parameter o null si no existe
   */
  const get = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  /**
   * Obtiene todos los query parameters como un objeto
   * 
   * @returns Objeto con todos los query parameters
   */
  const getAll = useCallback((): Record<string, string> => {
    const params: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [searchParams]);

  /**
   * Actualiza o agrega un query parameter
   * 
   * @param key - Nombre del query parameter
   * @param value - Valor a establecer (si es null o undefined, se elimina)
   */
  const set = useCallback(
    (key: string, value: string | number | null | undefined) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === null || value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }

      const newSearchParams = params.toString();
      const newUrl = newSearchParams
        ? `${pathname}?${newSearchParams}`
        : pathname;

      router.push(newUrl, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  /**
   * Elimina un query parameter
   * 
   * @param key - Nombre del query parameter a eliminar
   */
  const remove = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);

      const newSearchParams = params.toString();
      const newUrl = newSearchParams
        ? `${pathname}?${newSearchParams}`
        : pathname;

      router.push(newUrl, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  /**
   * Actualiza múltiples query parameters a la vez
   * 
   * @param params - Objeto con los query parameters a actualizar
   */
  const setMultiple = useCallback(
    (params: Record<string, string | number | null | undefined>) => {
      const newParams = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null || value === undefined || value === "") {
          newParams.delete(key);
        } else {
          newParams.set(key, String(value));
        }
      }

      const newSearchParams = newParams.toString();
      const newUrl = newSearchParams
        ? `${pathname}?${newSearchParams}`
        : pathname;

      router.push(newUrl, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  /**
   * Elimina todos los query parameters
   */
  const clear = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  return {
    get,
    getAll,
    set,
    remove,
    setMultiple,
    clear,
  };
}

