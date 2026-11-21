/**
 * @file __mocks__/next-intl.ts
 * @description Mock de next-intl que resuelve claves contra messages/es.json.
 * Si la clave no existe devuelve la propia clave.
 */

import messages from "../messages/es.json";

type Values = Record<string, string | number>;

const resolve = (path: string): unknown =>
  path
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      messages
    );

export const useTranslations = (namespace?: string) => {
  const fullKey = (key: string) => (namespace ? `${namespace}.${key}` : key);

  const t = (key: string, values?: Values) => {
    const message = resolve(fullKey(key));
    if (typeof message !== "string") return key;
    return message.replaceAll(/\{(\w+)\}/g, (_, name: string) =>
      String(values?.[name] ?? `{${name}}`)
    );
  };
  t.raw = (key: string) => resolve(fullKey(key));
  t.has = (key: string) => resolve(fullKey(key)) !== undefined;

  return t;
};

export const useLocale = () => "es";

export const hasLocale = (locales: readonly string[], locale: unknown) =>
  typeof locale === "string" && locales.includes(locale);

export const NextIntlClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => children;
