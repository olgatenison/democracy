export default function Hero({ heroData }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  pt-40 pb-20">
        <h2 className="text-balance text-4xl font-semibold tracking-tight  sm:text-6xl font-garamond text-blue-900 pb-8 border-b-4 text-center [font-variant:small-caps]">
          {heroData.title}
        </h2>
        <p className="mx-auto mt-3  max-w-2xl  text-lg/8 text-center text-balance  pt-8 text-gray-600">
          {heroData.subtitle}
        </p>
      </div>
    </div>
  );
}
