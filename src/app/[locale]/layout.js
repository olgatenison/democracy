import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Playfair_Display, Montserrat, EB_Garamond } from "next/font/google";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Імпортуємо шрифти
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-playfair", // змінна CSS (не обов'язково)
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat", // змінна CSS
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-eb-garamond",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${montserrat.variable} ${ebGaramond.variable}`}
    >
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
