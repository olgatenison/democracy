import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacts" className="bg-white py-12 px-6 lg:px-8">
      <div className="flex mx-auto max-w-5xl justify-start">
        <div>
          <div className="">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl font-garamond [font-variant:small-caps] text-blue-900 border-b-2 pb-3 ">
              Contacts
            </h2>
            <ArrowUpRight className="h-10 w-10 text-blue-900 group-hover:text-blue-900 transition-transform group-hover:translate-x-1 mt-2" />
          </div>
          <div className="mt-3  pb-8 space-y-1 text-sm/6 text-gray-600 ">
            <div>
              <a
                href="mailto:igors@buildingdemocracy.foundation"
                className="inline-flex items-center gap-2 text-blue-900 hover:underline font-semibold"
              >
                <span>Email:</span>
                <span>igors@buildingdemocracy.foundation</span>
              </a>

              <h3 className="mt-3 font-semibold">Address:</h3>
              <a
                href="https://www.google.com/maps?q=405+E+Laburnum+Ave+Ste+3,+Richmond,+VA+23222"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl mt-1 text-sm text-blue-900 font-medium transition bg-gray-200 hover:bg-[#e1e7f8] p-3"
              >
                <address className="not-italic leading-tight text-gray-600 group-hover:text-blue-900 transition-colors">
                  <span className="block pb-2">405 E Laburnum Ave Ste 3</span>
                  <span>Richmond, VA 23222</span>
                </address>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
