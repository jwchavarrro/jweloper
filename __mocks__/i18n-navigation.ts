/**
 * @file __mocks__/i18n-navigation.ts
 * @description Mock de @/app/[locale]/i18n-navigation que reutiliza los mocks de next/link y next/navigation
 * (mismas instancias que configuran los tests).
 */

export { default as Link } from "next/link";
export { usePathname, useRouter } from "next/navigation";

export const redirect = jest.fn();
export const getPathname = jest.fn(({ href }: { href: string }) => href);
