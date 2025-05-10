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

// import { createClient } from "contentful";
// import { Entry } from "contentful";
// import { Document } from "@contentful/rich-text-types";

// export const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
// });
// export async function fetchContentFromContentful(locale, contentType) {
//     const contentfulLocale = locale === "en" ? "en-US" : "ru";

// export async function getFooter() {
//   const entries = await client.getEntries({
//     content_type: " siteSettingsCollection",
//   });

//   return entries.items.map((item) => ({
//     _id: item.sys._id,
//     footerText: item.fields.footerText,
//     contactEmail: item.fields.subtitle,
//     address: item.fields.address,
//     cryptoInfo: item.fields.cryptoInfo,
//   }));
// }

// export async function fetchContentFromContentful(locale, contentType) {
//   const contentfulLocale = locale === "en" ? "en-US" : "ru"; // Привязываем локаль

//   // Строим запрос GraphQL
//   const query = /* GraphQL */ `
//       query {
//         ${contentType}Collection(locale: "${contentfulLocale}", limit: 1) {
//           items {
//             footerText
//             contactEmail
//             address
//             cryptoInfo
//           }
//         }
//       }
//     `;

//   const res = await fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
//       },
//       body: JSON.stringify({ query }),
//     }
//   );

//   // Логируем статус ответа и текст
//   const responseText = await res.text(); // Логируем текст, но не используем его для дальнейших операций
//   console.log("Response Status:", res.status); // Логируем статус ответа
//   console.log("Response Text:", responseText); // Логируем текст ответа

//   // Проверяем статус ответа
//   if (!res.ok) {
//     console.error("Error response from Contentful:", responseText);
//     throw new Error("Failed to fetch data from Contentful");
//   }

//   // После того как мы логировали, делаем запрос в JSON
//   const { data } = await res.json(); // Теперь работаем с JSON
//   return data[`${contentType}Collection`]?.items[0] || null;
// }
