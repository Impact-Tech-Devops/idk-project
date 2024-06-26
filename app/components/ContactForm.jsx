"use client";

const Contact = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
              Contact us
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              We'd love to talk about how we can help you.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto shadow-md">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
              Fill in the form
            </h2>

            <form className="">
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500  disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-lastname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500  disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-phone-number-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500  disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hs-about-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium "
                  >
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows="4"
                    className="py-3 px-4 block w-full rounded-lg text-sm   disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Send Message
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
