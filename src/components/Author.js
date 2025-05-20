import { ArrowUpRight } from "lucide-react";

export default function Author({ authorData }) {
  return (
    <>
      <div className="mx-auto  max-w-7xl px-6  lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl">
              {authorData.title}
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
              {authorData.subtitle}
            </p>
          </div>

          <div className="mt-16 divide-y divide-gray-900/10">
            {authorData.articles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-start justify-between text-left text-gray-900 py-4 hover:text-blue-900 transition sm:flex-row flex-col hover:bg-[linear-gradient(140deg,_#fcfcea_0%,_#e8f4ef_48.5%,_#d3ecf5_100%)] -mx-10 px-10"
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
