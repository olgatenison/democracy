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
  console.log(donateData);
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
      <div className="mx-auto max-w-2xl ">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl text-center">
          {donateData.title}
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600 text-center max-w-lg mx-auto">
          {donateData.subtitle}
        </p>
        <div className="mt-7 mx-auto w-fit">
          <p className="font-semibold text-gray-900">{donateData.listTitle}</p>
          <ul className="text-gray-600 max-w-lg">
            {uniqueItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-x-3 text-base/7 font-semibold "
              >
                <div className="w-2 h-2 rounded-full flex-none bg-blue-900 mt-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-900 sm:text-3xl text-center my-20">
        {donateData.campaign}
      </h3>

      <ul
        role="list"
        className="mx-auto mt-10  max-w-7xl flex gap-5 flex-wrap justify-center pb-20"
      >
        {team.map((person) => (
          <li
            key={person.id}
            className="text-center  w-48 mt-3  text-sm/6 bg-gray-100 py-5 rounded-2xl"
          >
            <img
              alt=""
              src={person.imageUrl}
              className="mx-auto size-24 rounded-full -mt-16"
            />
            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-sm/6 text-gray-600">{person.role}</p>
            <div className="flex gap-4 items-center justify-center pt-3">
              <a
                href="https://www.blockchain.com/btc/address/your-bitcoin-address"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-0 text-gray-500 hover:bg-orange-100 hover:text-orange-600 transition border-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <span className="sr-only">Bitcoin</span>
                <img src="/b.svg" alt="Bitcoin" className="h-5 w-5" />
              </a>
              <a
                href="https://www.blockchain.com/btc/address/your-bitcoin-address"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 inline-block hover:opacity-80"
              >
                <img src="/pp.svg" alt="Bitcoin" className="w-full h-full" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
