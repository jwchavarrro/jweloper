/**
 * Hook personalizado para descargar archivos desde rutas públicas
 *
 * @returns Objeto con función para descargar archivos y estado de la descarga
 *
 * @example
 * ```tsx
 * const { downloadFile, state, reset } = useDownloadFile();
 *
 * // Descargar un archivo con nombre por defecto
 * downloadFile('/docs/documento.pdf');
 *
 * // Descargar un archivo con nombre personalizado
 * downloadFile('/docs/documento.pdf', 'mi-documento.pdf');
 *
 * // Verificar el estado
 * if (state.status === DownloadStatus.LOADING) {
 *   return <Spinner />;
 * }
 * if (state.status === DownloadStatus.ERROR) {
 *   return <Error message={state.error} />;
 * }
 * ```
 */

import { useCallback, useState } from "react";

/**
 * Enum para los estados de descarga
 */
export enum EnumDownloadStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

/**
 * Tipo para el estado de descarga
 */
type DownloadState =
  | { status: EnumDownloadStatus.IDLE }
  | { status: EnumDownloadStatus.LOADING }
  | { status: EnumDownloadStatus.SUCCESS }
  | { status: EnumDownloadStatus.ERROR; error: string };

interface UseDownloadFileReturn {
  downloadFile: (filePath: string, fileName?: string) => Promise<void>;
  state: DownloadState;
  reset: () => void;
}

export function useDownloadFile(): UseDownloadFileReturn {
  const [state, setState] = useState<DownloadState>({
    status: EnumDownloadStatus.IDLE,
  });

  /**
   * @name reset
   * @description Resetea el estado a IDLE.
   */
  const reset = useCallback(() => {
    setState({ status: EnumDownloadStatus.IDLE });
  }, []);

  /**
   * @name downloadFile
   * @description Descarga un archivo desde una ruta pública.
   */
  const downloadFile = useCallback(
    async (filePath: string, fileName?: string) => {
      try {
        setState({ status: EnumDownloadStatus.LOADING });

        // Esperar 3 segundos para visualizar el estado de descarga
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Verificar que el archivo existe haciendo una petición HEAD
        const response = await fetch(filePath, { method: "HEAD" });
        if (!response.ok) {
          throw new Error(
            `No se pudo acceder al archivo: ${response.statusText}`
          );
        }

        // Crear un enlace temporal
        const link = document.createElement("a");
        link.href = filePath;
        link.download = fileName || filePath.split("/").pop() || "download";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        // Agregar al DOM, hacer click y remover
        document.body.appendChild(link);
        link.click();
        // Usar remove() si está disponible, sino usar removeChild como fallback
        if (typeof link.remove === "function") {
          link.remove();
        } else {
          document.body.removeChild(link);
        }

        setState({ status: EnumDownloadStatus.SUCCESS });

        // Resetear a IDLE después de un breve delay
        setTimeout(() => {
          setState({ status: EnumDownloadStatus.IDLE });
        }, 1000);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Error desconocido al descargar el archivo";
        setState({ status: EnumDownloadStatus.ERROR, error: errorMessage });
        console.error("Error al descargar el archivo:", err);

        // Fallback: abrir en nueva pestaña si falla la descarga
        try {
          window.open(filePath, "_blank", "noopener,noreferrer");
        } catch (fallbackError) {
          console.error("Error en fallback:", fallbackError);
        }
      }
    },
    []
  );

  return { downloadFile, state, reset };
}
