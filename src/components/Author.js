import { ArrowUpRight } from "lucide-react";

export default function Author() {
  return (
    <>
      <div className="mx-auto  max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Publications and Writings
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
              Mr. Slabykh is the author of numerous legal and general articles
              in both Russian and English, in which he explores various aspects
              of the American and Russian legal and judicial systems. Some of
              his articles include:
            </p>
          </div>

          <div className="mt-16 divide-y divide-gray-900/10">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-start justify-between text-left text-gray-900 py-4 hover:text-blue-600 transition"
            >
              <p className="text-base/7 font-semibold">
                “Foreign-Owned Businesses in Russia Face Shifting Legal Sands”
              </p>
              <div className="flex items-center gap-2">
                <p>for Wilson Center/Kennan Institute</p>
                <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-start justify-between text-left text-gray-900 py-4 hover:text-blue-600 transition"
            >
              <p className="text-base/7 font-semibold">
                “Foreign-Owned Businesses in Russia Face Shifting Legal Sands”
              </p>
              <div className="flex items-center gap-2">
                <p>for Wilson Center/Kennan Institute</p>
                <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-start justify-between text-left text-gray-900 py-4 hover:text-blue-600 transition"
            >
              <p className="text-base/7 font-semibold">
                “Foreign-Owned Businesses in Russia Face Shifting Legal Sands”
              </p>
              <div className="flex items-center gap-2">
                <p>for Wilson Center/Kennan Institute</p>
                <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
