// app/[locale]/about/page.js
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// Функция для получения данных "О нас" из Contentful
async function getAboutContent(locale) {
  // Соответствие locale Next.js с кодом locale в Contentful
  const contentfulLocale = locale === "en" ? "en-US" : "ru-RU";
  const query = /* GraphQL */ `
    query {
      aboutPageCollection(locale: "${contentfulLocale}", limit: 1) {
        items {
          title
          content
        }
      }
    }
  `;
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Contentful data");
  const { data } = await res.json();
  return data?.aboutPageCollection?.items[0];
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  // Устанавливаем локаль (еще раз на уровне страницы, для надежности)
  setRequestLocale(locale);

  // Получаем функцию перевода, ограниченную пространством "About"
  const t = await getTranslations("About");
  // Загружаем контент страницы из Contentful
  // const pageData = await getAboutContent(locale);

  return (
    <main>
      {/* <h1>{pageData ? pageData.title : t("title")}</h1>
      <p>{pageData ? pageData.content : t("content")}</p> */}
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
      {/* Ссылка для переключения языка страницы "About" */}
      <p>
        {locale === "en" ? (
          <Link href="/about" locale="ru">
            Переключиться на русский about
          </Link>
        ) : (
          <Link href="/about" locale="en">
            Switch to English about
          </Link>
        )}
      </p>
    </main>
  );
}
