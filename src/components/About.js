export default function About({ aboutData }) {
  return (
    <section id="about" className=" overflow-hidden mt-10 md:mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 pb-20 border-b-2 border-blue-900">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl font-garamond [font-variant:small-caps] pb-8 border-b-2">
              {aboutData.title}
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium sm:max-w-md sm:text-xl/8 lg:max-w-none text-gray-600">
              {aboutData.subtitle}
            </p>
            <p className="mt-6 text-base/7 text-gray-500">{aboutData.text}</p>
          </div>

          <div className=" hidden md:flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents ">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt="decor"
                src="/22.webp"
                className="aspect-[7/5] w-[37rem] max-w-none  bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  alt="decor"
                  src="/66.webp"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none  bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt="decor"
                  src="/33.webp"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none  bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt="decor"
                  src="/77.webp"
                  className="aspect-[4/3] w-[24rem] max-w-none bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>

          <img
            alt="decor"
            src="/22.webp"
            className="aspect-[7/5]  max-w-full  bg-gray-50 md:hidden block object-cover"
          />
        </div>
      </div>
    </section>
  );
}
