import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <main className="h-screen">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div class="lg:col-span-7">
              <div class="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div class="col-span-4">
                  <img
                    class="rounded-xl"
                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                    alt="Image Description"
                  />
                </div>

                <div class="col-span-3">
                  <img
                    class="rounded-xl"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                  />
                </div>

                <div class="col-span-5">
                  <img
                    class="rounded-xl"
                    src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>

            <div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div class="space-y-6 sm:space-y-8">
                <div class="space-y-2 md:space-y-4">
                  <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    Collaborative tools to design user experience
                  </h2>
                  <p class="text-gray-500">
                    Use our tools to explore your ideas and make your vision
                    come true. Then share your work easily.
                  </p>
                </div>

                <ul role="list" class="space-y-2 sm:space-y-4">
                  <li class="flex space-x-3">
                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span class="text-sm sm:text-base text-gray-500">
                      <span class="font-bold">Less routine</span> – more
                      creativity
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span class="text-sm sm:text-base text-gray-500">
                      Hundreds of thousands saved
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span class="text-sm sm:text-base text-gray-500">
                      Scale budgets <span class="font-bold">efficiently</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
