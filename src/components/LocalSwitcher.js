"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = ["en", "ru"];

export default function LocalSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select value={currentLocale} onChange={handleChange} className="">
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale === "en" ? "English" : "Русский"}
        </option>
      ))}
    </select>
  );
}
