// app/[locale]/page.js
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { getFooter } from "../../lib/contentful.js";

export default async function MainPage({ params }) {
  const { locale } = params; // Доступ к параметрам маршрута

  // Устанавливаем локаль
  setRequestLocale(locale);

  // Загружаем переводы
  const t = await getTranslations("MainPage");

  // Получаем данные футера
  const footerData = await getFooter(locale);

  return (
    <>
      <main>
        <h1>{t("title")}</h1>
        <p>{t("content")}</p>
      </main>

      {/* Футер */}
      <footer>
        <p>{footerData[0].footerText}</p>
        <p>{footerData[0].address}</p>
        <p>{footerData[0].cryptoInfo}</p>
        <p>Contact us: {footerData[0].contactEmail}</p>
      </footer>
    </>
  );
}
