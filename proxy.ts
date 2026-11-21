/**
 * @file proxy.ts
 * @description Proxy de Next.js 16: negociación de locale y redirecciones con next-intl.
 */

// Import of utilities
import createMiddleware from "next-intl/middleware";

// Import of i18n
import { routing } from "./app/[locale]/i18n-routing";

export default createMiddleware(routing);

export const config = {
  // Excluir rutas internas (_next), API y archivos estáticos
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
