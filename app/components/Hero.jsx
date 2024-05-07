"use client";

const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl ">
              Designed for you to get more{" "}
              <span className="text-red-600">simple</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Build your business here. Take it anywhere.
            </p>
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('/images/4.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

            <div className="absolute inset-0 size-full">
              <div className="flex flex-col justify-center items-center size-full">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-500 dark:border-red-600 dark:text-white dark:hover:bg-red-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-red-600"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Get Started
                </a>
              </div>
            </div>

            <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg ">
              <div className="bg-black/20 size-48 rounded-lg "></div>
            </div>

            <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-red-600 to-orange-400 p-px rounded-full">
              <div className="bg-black/20 size-48 rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
