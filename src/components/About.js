export default function About() {
  return (
    <div className=" overflow-hidden sm:mt-40 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              BDF’s mission
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
              BDF’s mission is to advance democracy in authoritarian societies
              and emerging democracies.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              We achieve this through educational, scientific, and
              community-building initiatives aimed at strengthening democratic
              institutions, countering authoritarianism, and fostering
              democratic resilience. Because democracy cannot thrive without the
              rule of law, ensuring its enforcement is a key focus of BDF’s
              work. This includes defending human and civil rights, pursuing
              strategic litigation, combating prejudice and discrimination, and
              undertaking similar efforts.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  alt=""
                  src="/3.jpg"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-contain"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt=""
                  src="/2.jpg"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt=""
                  src="/2.jpg"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="bg-white py-24 sm:py-32">
//   <div className="mx-auto max-w-7xl px-6 lg:px-8">
//     <div className="mx-auto max-w-3xl lg:mx-0">
//       <p className="text-base/7 font-semibold text-indigo-600">
//         Get the help you need
//       </p>
//       <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
//         About BDF
//       </h2>
//       <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
//         Building Democracy Foundation (BDF) is a registered 501(c)(3) NGO
//         dedicated to supporting underdeveloped communities by promoting
//         democracy and the rule of law, defending human and civil rights, and
//         combating prejudice and discrimination. Our goal is to help these
//         communities experience the full benefits of democracy.
//       </p>
//       <div className="mt-8  text-base/7 text-gray-700 ">
//         <p>
//           BDF’s mission is to advance democracy in authoritarian societies
//           and emerging democracies. We achieve this through educational,
//           scientific, and community-building initiatives aimed at
//           strengthening democratic institutions, countering
//           authoritarianism, and fostering democratic resilience. Because
//           democracy cannot thrive without the rule of law, ensuring its
//           enforcement is a key focus of BDF’s work. This includes defending
//           human and civil rights, pursuing strategic litigation, combating
//           prejudice and discrimination, and undertaking similar efforts.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
