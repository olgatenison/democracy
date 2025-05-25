export default function Hero({ heroData }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 pb-24 pt-40">
        <h2 className="text-balance text-4xl font-semibold tracking-tight  sm:text-6xl font-garamond text-blue-900 pb-8 border-b-4 text-center [font-variant:small-caps]">
          {heroData.title}
        </h2>
        <p className="mx-auto mt-3 max-w-4xl  text-lg/8 text-center text-balance border-t-1 pt-8 text-gray-600">
          {heroData.subtitle}
        </p>

        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.8"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#1b19a5" />
              <stop offset={1} stopColor="#dd1d30" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
