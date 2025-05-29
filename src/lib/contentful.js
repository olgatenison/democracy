// lib/contentful.js
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

export async function getHero(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await client.getEntries({
      content_type: "hero",
      locale: contentfulLocale,
      include: 2,
    });

    const item = response.items[0];

    return {
      title: item.fields.heroTitle,
      subtitle: item.fields.heroSubtitle,
    };
  } catch (error) {
    console.error("Ошибка при получении в Герое:", error);
    return null;
  }
}

export async function getAbout(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await client.getEntries({
      content_type: "about",
      locale: contentfulLocale,
      include: 2, // подтягиваем связанные статьи
    });

    const item = response.items[0];

    return {
      title: item.fields.aboutTitle,
      subtitle: item.fields.aboutSubtitle,
      text: item.fields.aboutText,
    };
  } catch (error) {
    console.error("Ошибка при получении о нас:", error);
    return null;
  }
}

export async function getManagingDirector(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await client.getEntries({
      content_type: "managingDirector", // 👈 название content type
      locale: contentfulLocale,
    });

    const item = response.items[0]; // Предполагаем, что запись одна

    return {
      title: item.fields.directorTitle,
      subtitle: item.fields.directorSubtitle,
      name: item.fields.name,
      position: item.fields.directorPosition,
      photo: item.fields.photo.fields.file.url.startsWith("//")
        ? "https:" + item.fields.photo.fields.file.url
        : item.fields.photo.fields.file.url,
      textFirst: item.fields.directorTextFirst,
      textSecond: item.fields.directorTextSecond,
      textThird: item.fields.directorTextThird,
      telegramLink: item.fields.directorTelegramLink,
      youtubeLink: item.fields.directorYoutubeLink,
    };
  } catch (error) {
    console.error("Ошибка при получении данных директора:", error);
    return null;
  }
}

export async function getPublications(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await client.getEntries({
      content_type: "publications",
      locale: contentfulLocale,
      include: 2, // подтягиваем связанные статьи
    });

    const item = response.items[0];

    return {
      title: item.fields.publicationsTitle,
      subtitle: item.fields.publicationsSubtitle,
      articles: item.fields.articleList.map((article) => ({
        id: article.sys.id,
        name: article.fields.acticleName,
        press: article.fields.articlePress,
        link: article.fields.acticleLink,
      })),
    };
  } catch (error) {
    console.error("Ошибка при получении публикаций:", error);
    return null;
  }
}

export async function getDonation(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await client.getEntries({
      content_type: "donation",
      locale: contentfulLocale,
      include: 2,
    });

    const item = response.items[0];

    const campaignList = item.fields.donationCampaignList || [];

    const campaign = campaignList.map((entry) => ({
      id: entry.sys.id,
      title: entry.fields.title,
      subtitle: entry.fields.subtitle,
      donationLink: entry.fields.donationLink,
      donationLinkBit1: entry.fields.donationLinkBit1,
      image: entry.fields.image?.fields?.file?.url
        ? "https:" + entry.fields.image.fields.file.url
        : null,
    }));

    return {
      title: item.fields.donationTitle,
      subtitle: item.fields.donationSubtitle,
      listTitle: item.fields.donationListTitle,

      listItem: item.fields.donationListItem,
      campaignMainTitle: item.fields.donationCampaign,
      campaign, // теперь массив карточек
    };
  } catch (error) {
    console.error("Ошибка при получении donation:", error);
    return null;
  }
}

export async function getContact(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await client.getEntries({
      content_type: "contact",
      locale: contentfulLocale,
    });

    if (!response.items.length) {
      console.warn(
        `Не найдено записей для content_type: "contact" и locale: "${contentfulLocale}"`
      );
      return { contactData: null };
    }

    const item = response.items[0];

    return {
      contactTitle: item.fields.contactTitle,
      emailTitle: item.fields.emailTitle,
      emailText: item.fields.emailText,
      addressTitle: item.fields.addressTitle,
      addressFirstLine: item.fields.addressFirstLine,
      addressSecondLine: item.fields.adressSecondLine, // исправьте ID в Contentful!
      addressLink: item.fields.addressLink,
    };
  } catch (error) {
    console.error("Ошибка при получении данных контакта:", error);
    return { contactData: null };
  }
}

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
