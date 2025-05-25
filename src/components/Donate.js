const team = [
  {
    name: "Dmitry Kolezev",
    id: "1",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Helga Pirogova",
    id: "2",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Alexander Plyushev",
    id: "3",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "BDF",
    id: "4",
    role: "let us decide",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "BDF",
    id: "5",
    role: "cover administrative costs cover administrative costs",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

export default function Donate({ donateData }) {
  const uniqueItems = [...new Set(donateData.listItem)];
  // console.log(donateData);
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8 border-b-2 border-blue-900">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl font-garamond [font-variant:small-caps] pb-8 border-b-2">
          {donateData.title}
        </h2>
        <div className="flex gap-8 flex-row justify-between">
          <div>
            <p className="mt-6 text-lg text-gray-600 max-w-72 mx-auto">
              {donateData.subtitle}
            </p>
          </div>
          <div className="mt-7 mx-auto w-fit text-lg ">
            <p className="font-semibold text-gray-900 mb-5">
              {donateData.listTitle}
            </p>
            <ul className="text-gray-600 ">
              {uniqueItems.map((item, index) => (
                <li key={index} className="flex items-start gap-x-3 ">
                  <div className="w-2 h-2 rounded-full flex-none bg-blue-900 mt-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-900 sm:text-4xl my-20 text-center font-garamond [font-variant:small-caps] pb-12 ">
        {donateData.campaignMainTitle}
      </h3>

      <ul
        role="list"
        className="mx-auto mt-10  max-w-7xl flex gap-5 flex-wrap justify-center pb-20"
      >
        {donateData.campaign?.map((card) => (
          <li
            key={card.id}
            className="group text-center w-48 mt-3 text-sm p-3 rounded-2xl bg-gray-200 hover:bg-[#e1e7f8]"
          >
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

            <div className="flex gap-3 items-center justify-center pt-3">
              {card.donationLinkBit1 && (
                <a
                  href={card.donationLinkBit1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 hover:bg-[#c7d5f9] transition "
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
    </div>
  );
}
{
  /* <ul
        role="list"
        className="mx-auto mt-10  max-w-7xl flex gap-5 flex-wrap justify-center pb-20"
      >
        {team.map((person) => (
          <li
            key={person.id}
            className="group text-center w-48 mt-3 text-sm py-5 rounded-2xl bg-gray-200 hover:bg-[#e1e7f8]"
          >
            <img
              alt=""
              src={person.imageUrl}
              className="mx-auto size-24 rounded-full -mt-16 transition-transform duration-300 group-hover:scale-105"
            />

            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-sm text-gray-600">{person.role}</p>
            <div className="flex gap-3 items-center justify-center pt-3">
            

              <a
                href="https://www.blockchain.com/btc/address/your-bitcoin-address"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0  hover:bg-[#c7d5f9]  transition "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Bitcoin</span>
                <img
                  src="/b.svg"
                  alt="Bitcoin"
                  className="h-7 w-7 opacity-40 hover:opacity-100 focus:opacity-100"
                />
              </a>

              <a
                href="https://www.paypal.com/donate/your-paypal-id"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 hover:bg-[#c7d5f9]   transition "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">PayPal</span>
                <img
                  src="/pp.svg"
                  alt="PayPal"
                  className="h-7 w-7 opacity-40 hover:opacity-100 focus:opacity-100"
                />
              </a>
            </div>
          </li>
        ))}
      </ul> */
}
