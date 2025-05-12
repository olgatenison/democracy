import Image from "next/image";
import { Send, Youtube } from "lucide-react";

const people = [
  {
    name: "Игорь Cлабых",
    role: "Managing Director",

    bio: "As a lawyer who practiced law in Russia and now resides in the U.S., Mr. Slabykh understands the significance of adhering to the rule of law and democratic principles. Without democracy, a society not only hinders its own development but also poses a risk to other nations, as Russia currently exemplifies.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function Director() {
  return (
    <div className="bg-white py-24 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Managing Director
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
            Bridging Legal Cultures Through Practice and Perspective
          </p>
        </div>
        <ul role="list" className="divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
            >
              <div className="relative aspect-[4/5] w-52 flex-none">
                <Image
                  alt={person.name}
                  src="/111111.jpg"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="max-w-xl flex-auto">
                <p className="text-base/7 text-gray-600">{person.role}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>

                <p className="mt-8   text-gray-700 text-lg font-medium">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-4">
                  <li>
                    <a
                      href={person.telegramUrl}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition border-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Telegram</span>
                      <Send className="h-5 w-5 " />
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.youtubeUrl}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 text-gray-500 hover:bg-red-100 hover:text-red-600 transition border-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">YouTube</span>
                      <Youtube className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
          <div className="mt-8  text-base/7 text-gray-700 ">
            <p>
              Mr. Slabykh practiced law in Russia for over 15 years before
              moving to the U.S. in 2016, where he earned an LL.M. degree from
              The George Washington University Law School. With knowledge of
              both the Russian and American legal systems, Mr. Slabykh strives
              to make these systems more accessible to his readers, explaining
              the Russian legal system to Americans and the American legal
              system to Russians.
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}
