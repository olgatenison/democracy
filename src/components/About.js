export default function About({ aboutData }) {
  return (
    <section id="about" className=" overflow-hidden mt-10  bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 pb-20 border-b-2 border-blue-900">
        <div className="mx-auto max-w-2xl ">
          <h2 className="text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl font-garamond [font-variant:small-caps] text-center">
            {aboutData.title}
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 lg:max-w-none text-gray-600 text-center">
            {aboutData.subtitle}
          </p>
          <p className="mt-6 text-base/7 text-gray-500 text-justify">
            {aboutData.text}
          </p>
        </div>
      </div>
    </section>
  );
}
