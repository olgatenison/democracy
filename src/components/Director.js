import Image from "next/image";
import { Send, Youtube } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

export default function Director({ directorData }) {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const url = node.data.uri;
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 font-bold hover:text-black transition-colors  px-1"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <section id="director" className="bg-white py-10 md:py-24 mt-2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5 pb-20 border-b-2 border-blue-900">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl font-garamond [font-variant:small-caps] pb-8 border-b-2">
            {directorData.title}
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium sm:max-w-md sm:text-xl/8 lg:max-w-none text-gray-600">
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
              <ul role="list" className="mt-6 flex gap-x-4">
                <li>
                  <a
                    href={directorData.telegramLink}
                    className="inline-flex h-10 w-10 items-center  justify-center rounded-full bg-gray-0 text-gray-500  hover:text-black transition border-2 hover:bg-[#e1e7f8]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Telegram</span>
                    <Send className="h-5 w-5 " />
                  </a>
                </li>
                <li>
                  <a
                    href={directorData.youtubeLink}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 text-gray-500 hover:bg-[#e1e7f8]  hover:text-black transition border-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">YouTube</span>
                    <Youtube className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-base/7 text-gray-700 ">
            <p>{directorData.textSecond}</p>
          </div>
          <div className="mt-8 text-base/7 text-gray-700 ">
            {documentToReactComponents(directorData.textThird, options)}
          </div>
        </article>
      </div>
    </section>
  );
}
