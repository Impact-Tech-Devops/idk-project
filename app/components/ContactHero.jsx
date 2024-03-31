import React from "react";

const ContactHero = () => {
  return (
    <div>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 ">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          

          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
            Get in Touch
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 ">
            We're eager to hear from you! Whether you have questions, feedback, or just want to say hello, don't hesitate to reach out. Our team is here to assist you every step of the way. Drop us a message, and let's start the conversation.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              
            Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
