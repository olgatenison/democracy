// app/[locale]/page.js
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation.js";
import { getHero } from "../../lib/contentful.js";
import Hero from "../../components/Hero.js";
import { getAbout } from "../../lib/contentful.js";
import About from "../../components/About.js";
import { getManagingDirector } from "../../lib/contentful.js";
import Director from "@/components/Director.js";
import { getPublications } from "../../lib/contentful.js";
import Author from "@/components/Author.js";
import { getDonation } from "../../lib/contentful.js";
import Donate from "@/components/Donate.js";
import Contact from "@/components/Contact.js";
import { getFooter } from "../../lib/contentful.js";
import Footer from "../../components/Footer";

export default async function MainPage({ params }) {
  const { locale } = await params;
  // Устанавливаем локаль
  setRequestLocale(locale);

  // Загружаем переводы
  // const t = await getTranslations("MainPage");

  const heroData = await getHero(locale);
  const aboutData = await getAbout(locale);
  const directorData = await getManagingDirector(locale);
  const authorData = await getPublications(locale);
  const footerData = await getFooter(locale);
  const donateData = await getDonation(locale);

  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto bg-white">
        {/* <h1>{t("title")}</h1>
        <p>{t("content")}</p> */}
        <Hero heroData={heroData} />
        <About aboutData={aboutData} />
        <Director directorData={directorData} />
        <Author authorData={authorData} />
        <Donate donateData={donateData} />
        <Contact />
      </main>

      {/* Футер */}
      <Footer footerData={footerData} />
    </div>
  );
}
