import { renderHook, act, waitFor } from "@testing-library/react";
import { useDownloadFile, EnumDownloadStatus } from "../use-download-file";

// Mock de fetch global
global.fetch = jest.fn();

// Mock de window.open
global.window.open = jest.fn();

// Mock de document.createElement y métodos relacionados
const mockClick = jest.fn();
const mockAppendChild = jest.fn();
const mockRemoveChild = jest.fn();

describe("useDownloadFile", () => {
  let createElementSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();

    // Guardar la implementación original antes de hacer el spy
    const originalCreateElement = Document.prototype.createElement;

    // Mock de document.createElement solo para elementos 'a'
    createElementSpy = jest
      .spyOn(document, "createElement")
      .mockImplementation(function (this: Document, tagName: string) {
        if (tagName === "a") {
          // Crear un objeto mock que guarde el valor de download
          const linkElement = {
            click: mockClick,
            href: "",
            _download: "",
            get download() {
              return this._download;
            },
            set download(value: string) {
              this._download = value;
            },
            target: "",
            rel: "",
          } as unknown as HTMLAnchorElement;
          return linkElement;
        }
        // Para otros elementos, usar la implementación original
        return originalCreateElement.call(this, tagName);
      });

    // Mock de document.body usando jest.spyOn (sin reemplazar la implementación real)
    jest.spyOn(document.body, "appendChild").mockImplementation((node) => {
      mockAppendChild(node);
      return node;
    });
    jest.spyOn(document.body, "removeChild").mockImplementation((node) => {
      mockRemoveChild(node);
      return node;
    });
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe("initial state", () => {
    it("should start with IDLE status", () => {
      const { result } = renderHook(() => useDownloadFile());

      expect(result.current.state.status).toBe(EnumDownloadStatus.IDLE);
    });
  });

  describe("downloadFile", () => {
    it("should download a file successfully", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        statusText: "OK",
      });

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.SUCCESS);
      expect(global.fetch).toHaveBeenCalledWith("/docs/test.pdf", {
        method: "HEAD",
      });
      expect(mockAppendChild).toHaveBeenCalled();
      expect(mockClick).toHaveBeenCalled();
      expect(mockRemoveChild).toHaveBeenCalled();
    });

    it("should use custom filename when provided", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        statusText: "OK",
      });

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf", "custom-name.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.SUCCESS);
      expect(createElementSpy).toHaveBeenCalledWith("a");
      expect(mockClick).toHaveBeenCalled();
    });

    it("should extract filename from path when filename is not provided", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        statusText: "OK",
      });

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/documento.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.SUCCESS);
      expect(createElementSpy).toHaveBeenCalledWith("a");
      expect(mockClick).toHaveBeenCalled();
    });

    it("should use 'download' as default filename when path has no filename", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        statusText: "OK",
      });

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.SUCCESS);
      expect(createElementSpy).toHaveBeenCalledWith("a");
      expect(mockClick).toHaveBeenCalled();
    });

    it("should set LOADING status during download", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        statusText: "OK",
      });

      const { result } = renderHook(() => useDownloadFile());

      // Verificar estado inicial
      expect(result.current.state.status).toBe(EnumDownloadStatus.IDLE);

      // Iniciar la descarga y esperar
      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      // Después de la descarga, debería estar en SUCCESS
      expect(result.current.state.status).toBe(EnumDownloadStatus.SUCCESS);
    });

    it("should reset to IDLE after successful download", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        statusText: "OK",
      });

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.SUCCESS);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      await waitFor(() => {
        expect(result.current.state.status).toBe(EnumDownloadStatus.IDLE);
      });
    });

    it("should handle fetch error and set ERROR status", async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error")
      );

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.ERROR);
      if (result.current.state.status === EnumDownloadStatus.ERROR) {
        expect(result.current.state.error).toBe("Network error");
      }
    });

    it("should handle HTTP error response", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
      });

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.ERROR);
      if (result.current.state.status === EnumDownloadStatus.ERROR) {
        expect(result.current.state.error).toContain("No se pudo acceder al archivo");
      }
      expect(global.window.open).toHaveBeenCalledWith(
        "/docs/test.pdf",
        "_blank",
        "noopener,noreferrer"
      );
    });

    it("should open file in new tab as fallback on error", async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error")
      );

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(global.window.open).toHaveBeenCalledWith(
        "/docs/test.pdf",
        "_blank",
        "noopener,noreferrer"
      );
    });

    it("should handle unknown error types", async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce("Unknown error");

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.ERROR);
      if (result.current.state.status === EnumDownloadStatus.ERROR) {
        expect(result.current.state.error).toBe(
          "Error desconocido al descargar el archivo"
        );
      }
    });
  });

  describe("reset", () => {
    it("should reset state to IDLE", async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        statusText: "OK",
      });

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.SUCCESS);

      act(() => {
        result.current.reset();
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.IDLE);
    });

    it("should reset from ERROR state to IDLE", async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error")
      );

      const { result } = renderHook(() => useDownloadFile());

      await act(async () => {
        await result.current.downloadFile("/docs/test.pdf");
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.ERROR);

      act(() => {
        result.current.reset();
      });

      expect(result.current.state.status).toBe(EnumDownloadStatus.IDLE);
    });
  });
});

