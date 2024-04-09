import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                    alt="Image Description"
                  />
                </div>

                <div className="col-span-3">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                  />
                </div>

                <div className="col-span-5">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                    Collaborative tools to design user experience
                  </h2>
                  <p className="text-gray-500">
                    Use our tools to explore your ideas and make your vision
                    come true. Then share your work easily.
                  </p>
                </div>

                <ul role="list" className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      <span className="font-bold">Less routine</span> – more
                      creativity
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      Hundreds of thousands saved
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-800">
                      Scale budgets{" "}
                      <span className="font-bold">efficiently</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-slate-100/50 pt-16 pb-32 space-y-24  text-black">
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    Skills Training and Entrepreneurship Development:
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The AI product utilizes advanced NLP algorithms to
                      understand and interpret human language, enabling it to
                      accurately process and analyze text-based inputs.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?w=740"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                     Capacity Building /Leadership and Management Development. 

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The product has built-in sentiment analysis capabilities,
                      allowing it to determine the sentiment (positive,
                      negative, or neutral) expressed in text or customer
                      feedback.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/golden-chess-queen-shines-blurred-board_157027-4439.jpg?w=740"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    ICT Training & Computer-Based Testing Application Design and Administration.

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The AI product can generate human-like written content,
                      summaries, or reports based on structured data or analysis
                      results.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width="646"
                    height="485"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/instructor-helping-students-computer-class_74855-2020.jpg?w=740"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    Teacher and Schools Development.

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The product has built-in sentiment analysis capabilities,
                      allowing it to determine the sentiment (positive,
                      negative, or neutral) expressed in text or customer
                      feedback.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/teamwork-environment-project_23-2148894028.jpg?w=826"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    International Education and Global Learning Services.

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The AI product can generate human-like written content,
                      summaries, or reports based on structured data or analysis
                      results.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width="646"
                    height="485"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/graduation-cap-earth-globe-arrangement_23-2148721284.jpg?w=740"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    Policy Studies/ Development Research.

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The product has built-in sentiment analysis capabilities,
                      allowing it to determine the sentiment (positive,
                      negative, or neutral) expressed in text or customer
                      feedback.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/diverse-business-partners-reading-contract-together_74855-2736.jpg?w=740"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    HR Recruitment/Employment Services.

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The AI product can generate human-like written content,
                      summaries, or reports based on structured data or analysis
                      results.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width="646"
                    height="485"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/graduation-cap-earth-globe-arrangement_23-2148721284.jpg?w=740"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    Organizing Conferences, Fairs and schools Competition

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The product has built-in sentiment analysis capabilities,
                      allowing it to determine the sentiment (positive,
                      negative, or neutral) expressed in text or customer
                      feedback.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                    IDK Learning Centre Facilities

                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The AI product can generate human-like written content,
                      summaries, or reports based on structured data or analysis
                      results.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                        href="/contact"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width="646"
                    height="485"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "white", opacity: 0.5 }}
                    src="https://img.freepik.com/free-photo/room-interior-design_23-2148899444.jpg?w=740"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
