// src\components\Navigation.js
"use client";
import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@/i18n/navigation.js";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";

export default function Navigation() {
  const t = useTranslations("Navigation");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-3">
      <div className="mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div>
          <Link href={{ pathname: "/" }}>
            {/* {t("name")} */}
            <img src="/logo.svg" alt="logo" className="h-10" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Navigation Controls */}
        <div className="hidden lg:flex lg:gap-x-12 w-full justify-end">
          <a
            href="#about"
            className="hover:bg-[#e1e7f8] p-2 rounded-2xl hover:text-blue-900 w-fit"
          >
            {t("about")}
          </a>
          <a
            href="#director"
            className="hover:bg-[#e1e7f8] p-2 rounded-2xl hover:text-blue-900"
          >
            {t("director")}
          </a>
          <a
            href="#donate"
            className="p-2 rounded-2xl hover:text-blue-900 hover:bg-[#e1e7f8]"
          >
            {t("donate")}
          </a>
          <a
            href="#contacts"
            className="hover:bg-[#e1e7f8] p-2 rounded-2xl hover:text-blue-900"
          >
            {t("contacts")}
          </a>
          <LocalSwitcher />
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Building Democracy Foundation</span>
              <img src="/logo.svg" alt="logo" className="h-10" />
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              <div className="flex flex-col gap-5">
                <a
                  href="#about"
                  className="hover:bg-[#e1e7f8] p-2 rounded-2xl hover:text-blue-900 w-fit"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("about")}
                </a>
                <a
                  href="#director"
                  className="hover:bg-[#e1e7f8] p-2 rounded-2xl hover:text-blue-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("director")}
                </a>
                <a
                  href="#donate"
                  className="p-2 rounded-2xl hover:text-blue-900 hover:bg-[#e1e7f8]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("donate")}
                </a>
                <a
                  href="#contacts"
                  className="hover:bg-[#e1e7f8] p-2 rounded-2xl hover:text-blue-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("contacts")}
                </a>
                <LocalSwitcher />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}
