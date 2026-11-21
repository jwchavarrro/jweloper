import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/[locale]/i18n-request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {},
};

export default withNextIntl(nextConfig);
