// lib/contentful.js
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

// Функция для получения данных футера
export async function getFooter(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru"; // Локализация в зависимости от переданного параметра

  try {
    const response = await client.getEntries({
      content_type: "siteSettings", // Убедитесь, что это правильный тип контента в Contentful
      locale: contentfulLocale, // Указываем локаль
    });

    // Получаем данные футера и подставляем их
    return response.items.map((item) => ({
      footerText: item.fields.footerText,
      contactEmail: item.fields.contactEmail,
      address: item.fields.address,
      cryptoInfo: item.fields.cryptoInfo,
    }));
  } catch (error) {
    console.error("Ошибка при получении данных футера:", error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
}
