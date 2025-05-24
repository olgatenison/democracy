"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const locales = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

export default function LocalSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (locale) => {
    if (locale === currentLocale) return;
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  const currentLabel =
    locales.find((l) => l.code === currentLocale)?.label ?? currentLocale;

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1  hover:text-blue-900 hover:bg-[#e1e7f8] rounded-2xl p-2">
        <span>{currentLabel}</span>
        <ChevronDownIcon aria-hidden="true" className="w-5 h-5" />
      </PopoverButton>

      <PopoverPanel className="absolute z-10 mt-2 w-36 rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 focus:outline-none">
        <div className="py-1">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              className={`w-full text-left px-4 py-2 text-gray-700 hover:bg-[#e1e7f8] rounded-2xl hover:text-blue-900 ${
                locale.code === currentLocale ? "font-semibold text-black" : ""
              }`}
            >
              {locale.label}
            </button>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
