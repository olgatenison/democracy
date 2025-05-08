// app/[locale]/layout.js
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";

export function generateStaticParams() {
  // Указываем, что нужно сгенерировать страницы для каждой локали
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  // Проверяем валидность локали, иначе 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Фиксируем локаль запроса для next-intl (включаем режим SSG)
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        {/* Провайдер передает переводы и текущую локаль в дочерние компоненты */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
