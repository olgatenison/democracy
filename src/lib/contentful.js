import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

// Универсальный wrapper для ISR
async function fetchWithRevalidate(promise) {
  const result = await promise;
  // ISR через fetchOptions в Next.js App Router
  return JSON.parse(JSON.stringify(result), (_, value) =>
    typeof value === "object" && value !== null ? value : value
  );
}

export async function getHero(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await fetchWithRevalidate(
      client.getEntries({
        content_type: "hero",
        locale: contentfulLocale,
        include: 2,
        // ISR - обновление каждые 60 секунд
        next: { revalidate: 60 },
      })
    );

    const item = response.items[0];

    return {
      title: item.fields.heroTitle,
      subtitle: item.fields.heroSubtitle,
    };
  } catch (error) {
    console.error("Ошибка при получении Hero:", error);
    return null;
  }
}

export async function getAbout(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await fetchWithRevalidate(
      client.getEntries({
        content_type: "about",
        locale: contentfulLocale,
        include: 2,
        next: { revalidate: 60 },
      })
    );

    const item = response.items[0];

    return {
      title: item.fields.aboutTitle,
      subtitle: item.fields.aboutSubtitle,
      text: item.fields.aboutText,
    };
  } catch (error) {
    console.error("Ошибка при получении About:", error);
    return null;
  }
}

export async function getManagingDirector(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await fetchWithRevalidate(
      client.getEntries({
        content_type: "managingDirector",
        locale: contentfulLocale,
        next: { revalidate: 60 },
      })
    );

    const item = response.items[0];

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
    };
  } catch (error) {
    console.error("Ошибка при получении Managing Director:", error);
    return null;
  }
}

export async function getPublications(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await fetchWithRevalidate(
      client.getEntries({
        content_type: "publications",
        locale: contentfulLocale,
        include: 2,
        next: { revalidate: 60 },
      })
    );

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
    console.error("Ошибка при получении Publications:", error);
    return null;
  }
}

export async function getDonation(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await fetchWithRevalidate(
      client.getEntries({
        content_type: "donation",
        locale: contentfulLocale,
        include: 2,
        next: { revalidate: 60 },
      })
    );

    const item = response.items[0];

    const mainCampaignList = item.fields.donationCampaignListMain || [];
    const campaignList = item.fields.donationCampaignList || [];

    const mainCampaign = mainCampaignList.map((entry) => ({
      id: entry.sys.id,
      title: entry.fields.title,
      subtitle: entry.fields.subtitle,
      donationLink: entry.fields.donationLink,
      donationLinkBit1: entry.fields.donationLinkBit1,
      image: entry.fields.image?.fields?.file?.url
        ? "https:" + entry.fields.image.fields.file.url
        : null,
    }));

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
      extraSubtitle: item.fields.extraSubtitle,
      campaignMainTitle: item.fields.donationCampaign,
      mainCampaign,
      campaign,
    };
  } catch (error) {
    console.error("Ошибка при получении Donation:", error);
    return null;
  }
}

export async function getContact(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await fetchWithRevalidate(
      client.getEntries({
        content_type: "contact",
        locale: contentfulLocale,
        next: { revalidate: 60 },
      })
    );

    if (!response.items.length) {
      console.warn(
        `Не найдено записей для Contact с locale: ${contentfulLocale}`
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
      addressSecondLine: item.fields.adressSecondLine,
      addressLink: item.fields.addressLink,
    };
  } catch (error) {
    console.error("Ошибка при получении Contact:", error);
    return { contactData: null };
  }
}

export async function getFooter(locale) {
  const contentfulLocale = locale === "en" ? "en-US" : "ru";

  try {
    const response = await fetchWithRevalidate(
      client.getEntries({
        content_type: "siteSettings",
        locale: contentfulLocale,
        next: { revalidate: 60 },
      })
    );

    return response.items.map((item) => ({
      footerText: item.fields.footerText,
      contactEmail: item.fields.contactEmail,
      address: item.fields.address,
      cryptoInfo: item.fields.cryptoInfo,
    }));
  } catch (error) {
    console.error("Ошибка при получении Footer:", error);
    return [];
  }
}
