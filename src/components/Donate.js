const team = [
  {
    name: "Michael Foster",
    id: "1",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Michael Foster",
    id: "2",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Michael Foster",
    id: "3",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Michael Foster",
    id: "4",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Michael Foster",
    id: "5",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

export default function Donate() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
      <div className="mx-auto max-w-2xl ">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-blue-900 sm:text-5xl text-center">
          Donate
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600 text-center max-w-lg mx-auto">
          Please note that sometimes we cannot fully disclose whom we help due
          to risks for people in authoritarian societies.
        </p>
        <div className="mt-7 mx-auto w-fit">
          <p className="font-semibold text-gray-900">
            You have several options whom to help
          </p>
          <ul className="text-gray-600">
            <li className="flex items-center gap-x-3 text-base/7 font-semibold ">
              <div className="w-2 h-2 rounded-full flex-none bg-blue-900" />
              To choose a specific fundraiser/person to support
            </li>
            <li className="flex items-center gap-x-3 text-base/7 font-semibold ">
              <div className="w-2 h-2 rounded-full flex-none bg-blue-900" />
              To donate to BDF to cover administrative costs
            </li>
            <li className="flex items-center gap-x-3 text-base/7 font-semibold ">
              <div className="w-2 h-2 rounded-full flex-none bg-blue-900" />
              To choose a specific fundraiser/person to support
            </li>
          </ul>
        </div>
      </div>
      <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-900 sm:text-3xl text-center mt-20">
        Current campaigns:
      </h3>

      <ul
        role="list"
        className="mx-auto mt-10  max-w-3xl flex gap-9 flex-wrap justify-center pb-20"
      >
        {team.map((person) => (
          <li key={person.id}>
            <img
              alt=""
              src={person.imageUrl}
              className="mx-auto size-24 rounded-full"
            />
            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-sm/6 text-gray-600">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
