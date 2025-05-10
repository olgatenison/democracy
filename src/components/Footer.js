// components/Footer.js

export default function Footer({ footerData }) {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
          {footerData[0].footerText}
        </p>

        <div>
          <p>{footerData[0].address}</p>
          <p>{footerData[0].cryptoInfo}</p>
          <p>Contact us: {footerData[0].contactEmail}</p>
        </div>
      </div>
    </footer>
  );
}

// const navigation = [
//   {
//     name: "YouTube",
//     href: "#",
//     icon: (props) => (
//       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//         <path
//           fillRule="evenodd"
//           d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//           clipRule="evenodd"
//         />
//       </svg>
//     ),
//   },
// ];

{
  /* <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div> */
}
