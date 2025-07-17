export default function Donate({ donateData }) {
  const uniqueItems = [...new Set(donateData.listItem)];

  return (
    <section
      id="donate"
      className="mx-auto max-w-7xl px-6 pt-10 md:pt-24 lg:px-8 border-b-2 border-blue-900"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl font-garamond [font-variant:small-caps] pb-8 border-b-2 md:text-left text-center">
          {donateData.title}
        </h2>
        <div className="flex gap-3 md:gap-12 flex-col md:flex-row justify-between">
          <div>
            <p className="mt-6 text-lg text-gray-600 md:max-w-96 mx-auto">
              {donateData.subtitle}
            </p>
          </div>

          <div className="md:mt-7 md:mx-auto w-fit text-lg">
            <p className="font-semibold text-gray-900 md:mb-5">
              {donateData.listTitle}
            </p>
            <ul className="text-gray-600">
              {uniqueItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full flex-none bg-blue-900 mt-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-900 sm:text-4xl text-center font-garamond [font-variant:small-caps] mt-8 mb-20">
        {donateData.campaignMainTitle}
      </h3>

      <ul
        role="list"
        className="mx-auto mt-10  max-w-7xl flex gap-5 flex-wrap justify-center "
      >
        {donateData.mainCampaign?.map((card) => (
          <li
            key={card.id}
            className="group flex flex-col justify-between text-center w-48 mt-3 text-sm p-3 rounded-2xl bg-gray-200 hover:bg-[#e1e7f8] mb-12"
          >
            <div>
              {card.image && (
                <img
                  alt={card.title}
                  src={card.image}
                  className="mx-auto size-24 rounded-full -mt-16 transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.subtitle}</p>
            </div>

            <div className="flex gap-3 items-center justify-center pt-3">
              {card.donationLinkBit1 && (
                <a
                  href={card.donationLinkBit1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 hover:bg-[#c7d5f9] transition"
                >
                  <img
                    src="/b.svg"
                    alt="Bitcoin"
                    className="h-7 w-7 opacity-40 hover:opacity-100"
                  />
                </a>
              )}
              {card.donationLink && (
                <a
                  href={card.donationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 hover:bg-[#c7d5f9] transition"
                >
                  <img
                    src="/pp.svg"
                    alt="PayPal"
                    className="h-7 w-7 opacity-40 hover:opacity-100"
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className=" text-lg md:max-w-xl mx-auto text-center mb-20 text-blue-900 font-bold">
        {donateData.extraSubtitle}
      </p>
      {donateData.campaign?.length > 0 && (
        <ul
          role="list"
          className="mx-auto mt-10 max-w-7xl flex gap-5 flex-wrap justify-center md:pb-20"
        >
          {donateData.campaign.map((card) => (
            <li
              key={card.id}
              className="group flex flex-col justify-between text-center w-48 mt-3 text-sm p-3 rounded-2xl bg-gray-200 hover:bg-[#e1e7f8] mb-12"
            >
              <div>
                {card.image && (
                  <img
                    alt={card.title}
                    src={card.image}
                    className="mx-auto size-24 rounded-full -mt-16 transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.subtitle}</p>
              </div>

              <div className="flex gap-3 items-center justify-center pt-3">
                {card.donationLinkBit1 && (
                  <a
                    href={card.donationLinkBit1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 hover:bg-[#c7d5f9] transition"
                  >
                    <img
                      src="/b.svg"
                      alt="Bitcoin"
                      className="h-7 w-7 opacity-40 hover:opacity-100"
                    />
                  </a>
                )}
                {card.donationLink && (
                  <a
                    href={card.donationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 hover:bg-[#c7d5f9] transition"
                  >
                    <img
                      src="/pp.svg"
                      alt="PayPal"
                      className="h-7 w-7 opacity-40 hover:opacity-100"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
