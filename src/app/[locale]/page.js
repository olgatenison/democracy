// app/[locale]/page.js
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import Hero from "../../components/Hero.js";
import About from "../../components/About.js";
import Author from "@/components/Author.js";
import Director from "@/components/Director.js";

import { getFooter } from "../../lib/contentful.js";
import Footer from "../../components/Footer";
import { getManagingDirector } from "../../lib/contentful.js";
import Donate from "@/components/Donate.js";

export default async function MainPage({ params }) {
  const { locale } = await params; // Доступ к параметрам маршрута

  // Устанавливаем локаль
  setRequestLocale(locale);

  // Загружаем переводы
  const t = await getTranslations("MainPage");

  // Получаем данные футера
  const footerData = await getFooter(locale);
  const directorData = await getManagingDirector(locale);

  return (
    <div>
      <main className="max-w-7xl mx-auto bg-white ">
        <h1>{t("title")}</h1>
        <p>{t("content")}</p>
        <Hero />
        <About />
        <Director directorData={directorData} />
        <Author />
        <Donate />
      </main>

      {/* Футер */}
      <Footer footerData={footerData} />
    </div>
  );
}
