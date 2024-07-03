"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div>

      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-800">

        <div className="text-center">
          <div>
            <a className="flex-none text-xl font-semibold text-white text-center text-medium" href="/" aria-label="Brand">
            <img src="/images/favicon.ico" className="w-auto h-10 mx-auto" alt="idk"/>

            </a>
          </div>


          <div className="mt-3">
            <p className="text-gray-500">Developed By <span className="font-semibold text-blue-600 hover:text-blue-700">Hi Impact Choice Devops</span> team</p>
            <p className="text-gray-500">© IDK. 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
