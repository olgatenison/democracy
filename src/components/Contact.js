export default function Contact() {
  return (
    <div className="bg-white py-8 px-6 lg:px-10">
      <div className="flex mx-auto max-w-3xl justify-between">
        <div>
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
            Get in touch
          </h2>
          <p className="mt-4 text-base/7 text-gray-600 max-w-80">
            Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
          </p>
        </div>

        <div className="">
          <div className="rounded-2xl bg-gray-100 hover:bg-[#e1e7f8] p-10">
            <h3 className="text-base/7 font-semibold text-gray-900">
              Collaborate
            </h3>

            <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:collaborate@example.com"
                    className="font-semibold text-indigo-600"
                  >
                    igors@buildingdemocracy.foundation
                  </a>
                </dd>
                <h3 className="text-base/7 font-semibold text-gray-900 mt-3">
                  Richmond
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                  <p>405 E Laburnum Ave Ste 3 </p>
                  <p> Richmond, VA 23222</p>
                </address>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
