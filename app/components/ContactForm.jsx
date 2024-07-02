"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', firstName);
    formDataToSend.append('lastName', lastName);
    formDataToSend.append('email', email);
    formDataToSend.append('phone', phone);
    formDataToSend.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/xvgpoard', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        const result = await response.json();
        toast.error(result.error || "There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div id="form" className="h-100vh bg-slate-100/50">
      <ToastContainer />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact us</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">We'd love to talk about how we can help you.</p>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto shadow-md rounded-xl bg-white">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 className="mb-8 text-xl font-semibold text-gray-800">Fill in the form</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm text-gray-700 font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm text-gray-700 font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm text-gray-700 font-medium">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full rounded-lg text-sm focus:border-red-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-700 font-medium">Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="py-3 px-4 block w-full rounded-lg text-sm disabled:pointer-events-none bg-slate-200 border-gray-900 text-gray-900 focus:ring-gray-600"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Contact Us
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">We'll get back to you in 1-2 business days.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
