// src\components\Navigation.js
import React from "react";
// import LocalSwitcher from "./LocaleSwitcher.js";
import { Link } from "@/i18n/navigation.js";

import Image from "next/image";

export default async function Navigation() {
  return (
    <nav
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-white/20 backdrop-blur-md shadow-md z-50 rounded-b-2xl px-6 lg:px-8 py-3"
      aria-label="Peamenüü"
    >
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="focus-visible:outline focus-visible:outline-black rounded-md">
          <Link href={{ pathname: "/" }} tabIndex={0}>
            logo
            {/* <Image
              src="/hero/logo-white.svg"
              alt="Plastiliin logo – avaleht"
              width={120}
              height={40}
              priority
            /> */}
          </Link>
        </div>

        {/* Navigation Controls */}
        <div className="w-full flex justify-end">{/* <LocalSwitcher /> */}</div>
      </div>
    </nav>
  );
}
