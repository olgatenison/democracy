// next.config.mjs
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Можно добавить свои настройки (например, images, i18n и т.д.)
};

export default withNextIntl(nextConfig);
