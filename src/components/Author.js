import { ArrowUpRight } from "lucide-react";

export default function Author({ authorData }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div>
            <h2 className=" text-4xl font-semibold text-blue-900 sm:text-6xl  text-center font-garamond [font-variant:small-caps] pb-8 border-b-2">
              {authorData.title}
            </h2>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-full text-center">
              {authorData.subtitle}
            </p>
          </div>

          <div className="mt-16 divide-y divide-gray-900/10 w-full mx-auto">
            {authorData.articles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-start justify-between text-left text-gray-900 py-4 hover:text-blue-900 transition sm:flex-row flex-col hover:bg-[#e1e7f8]  px-10 rounded-2xl"
              >
                <p className="text-base/7 font-semibold sm:max-w-1/2">
                  {article.name}
                </p>
                <div className="flex items-center gap-2">
                  <p>{article.press}</p>
                  <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-blue-900 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
