export default function Contact({ contactData }) {
  return (
    <section id="contacts" className="bg-white py-12 px-6 lg:px-8">
      <div className="flex mx-auto md:max-w-5xl justify-center md:justify-start">
        <div>
          <div className="">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl font-garamond [font-variant:small-caps] text-blue-900 border-b-2 pb-3 text-center md:text-left">
              {contactData.contactTitle}
            </h2>
          </div>
          <div className="mt-3 pb-8 space-y-1 text-sm/6 text-gray-600 ">
            <div>
              <a
                href="mailto:igors@buildingdemocracy.foundation"
                className="flex items-center gap-2 text-blue-900 hover:underline font-semibold flex-wrap"
              >
                <span className="block">{contactData.emailTitle}</span>
                <span>{contactData.emailText}</span>
              </a>

              <h3 className="my-3 font-semibold">{contactData.addressTitle}</h3>
              <a
                href={contactData.addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl mt-1 text-sm text-blue-900 font-medium transition bg-gray-200 hover:bg-[#e1e7f8] p-3 "
              >
                <address className="not-italic leading-tight text-gray-600 group-hover:text-blue-900 transition-colors">
                  <span className="block pb-2">
                    {contactData.addressFirstLine}
                  </span>
                  <span>{contactData.addressSecondLine}</span>
                </address>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
