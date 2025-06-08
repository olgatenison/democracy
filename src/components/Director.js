import Image from "next/image";

import { INLINES } from "@contentful/rich-text-types";

export default function Director({ directorData }) {
  return (
    <section id="director" className="bg-white py-10 md:py-20 mt-2">
      <div className="mx-auto grid max-w-4xl lg:max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5 pb-20 ">
        <div className="max-w-2xl mx-auto xl:col-span-2">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl font-garamond [font-variant:small-caps] xl:text-left text-center mx-auto">
            {directorData.title}
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 lg:max-w-none text-gray-600 xl:text-left text-center mx-auto">
            {directorData.subtitle}
          </p>
        </div>

        <article className="xl:col-span-3">
          <div
            key={directorData.name}
            className="flex flex-col gap-5 md:gap-10 py-8 md:py-12 first:pt-0 last:pb-0 sm:flex-row"
          >
            <div className="relative aspect-[4/5] w-52 flex-none">
              <Image
                alt={directorData.name}
                src={directorData.photo}
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
            <div className="max-w-xl flex-auto">
              <p className="text-base/7 text-gray-600">
                {directorData.position}
              </p>
              <h3 className="text-4xl font-semibold tracking-tight text-blue-900 font-garamond [font-variant:small-caps] ">
                {directorData.name}
              </h3>

              <p className="mt-8   text-gray-700 text-lg font-medium">
                {directorData.textFirst}
              </p>
            </div>
          </div>

          <div className="text-base/7 text-gray-700 ">
            <p>{directorData.textSecond}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
