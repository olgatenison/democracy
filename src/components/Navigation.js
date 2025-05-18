// src\components\Navigation.js
import React from "react";
// import LocalSwitcher from "./LocaleSwitcher.js";
import { Link } from "@/i18n/navigation.js";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Navigation() {
  const t = await getTranslations("Navigation");

  return (
    <nav className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-3">
      <div className="mx-auto flex items-center">
        {/* Logo */}
        <div>
          <Link href={{ pathname: "/" }}>
            {/* {t("name")} */}
            <img src="/logo.svg" alt="logo" className="h-10" />
          </Link>
        </div>

        {/* Navigation Controls */}
        <div className="w-full flex justify-end gap-6">
          <div>
            <p>{t("about")}</p>
          </div>
          <div>
            <p>{t("director")}</p>
          </div>
          <div>
            <p>{t("donate")}</p>
          </div>
          <div>
            <p>{t("contacts")}</p>
          </div>
          {/* <LocalSwitcher /> */}
        </div>
      </div>
    </nav>
  );
}
