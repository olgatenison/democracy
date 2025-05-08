// i18n/request.js
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Получаем запрошенную локаль (из сегмента URL или cookie):
  const localeFromRequest = await requestLocale;
  // Проверяем, поддерживается ли она; если нет – используем локаль по умолчанию
  const locale = hasLocale(routing.locales, localeFromRequest)
    ? localeFromRequest
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
