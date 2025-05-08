// i18n/routing.js
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Список всех поддерживаемых языков на сайте:
  locales: ["en", "ru"],
  // Локаль по умолчанию (если ни одна из предпочтений пользователя не подходит):
  defaultLocale: "en",
});
