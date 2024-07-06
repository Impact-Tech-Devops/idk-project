"use client";

import { AcademicCapIcon, DesktopComputerIcon, DocumentTextIcon, TrendingUpIcon } from "@heroicons/react/outline"

const Features = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4 align-middle lg:pt-24 md:pt-20">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-gray-800">
            We provide a wide range of services to help businesses and individuals achieve their goals.
          </p>
          <p className="mt-5">
            <a className="inline-flex items-center gap-x-1 font-medium text-red-600" href="/services">
              Explore our services
              <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </a>
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
              <AcademicCapIcon className="flex-shrink-0 size-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Training and Development
              </h3>
              <p className="mt-1 text-gray-600">
                We offer capacity building, entrepreneurship training, and innovative business development programs.
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
              <DesktopComputerIcon className="flex-shrink-0 size-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                ICT Training
              </h3>
              <p className="mt-1 text-gray-600">
                Our ICT training includes computer-based test designs and administration to enhance digital literacy and skills.
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
              <DocumentTextIcon className="flex-shrink-0 size-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Policy Research
              </h3>
              <p className="mt-1 text-gray-600">
                We conduct policy research to provide insights and recommendations for informed decision-making.
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
              <TrendingUpIcon className="flex-shrink-0 size-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Business Development Services
              </h3>
              <p className="mt-1 text-gray-600">
                Our services include strategic business development, project management, and performance consulting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
