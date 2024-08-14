"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_bq00504", "template_u0bd7n9", form.current, {
        publicKey: "7EwoD37KBURq7vm0k",
      })
      .then(
        () => {
          setSuccess(true);
          setError("");
          form.current.reset();
          setLoading(false);

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setError("Failed to send message. Please try again.");
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="pb-12 pt-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center font-hind">
          Contact Us
        </h2>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-gray-800 shadow-lg rounded-lg p-8">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="user_name"
                  className="block text-gray-300 font-semibold mb-2 font-hind"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="user_email"
                  className="block text-gray-300 font-semibold mb-2 font-hind"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-semibold mb-2 font-hind"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              {loading ? (
                <span className="flex justify-center items-center">
                  <svg
                    className="w-6 h-6 mr-2 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path d="M4 12a8 8 0 0 1 16 0" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                >
                  Send Message
                </button>
              )}
              {success && (
                <p className="mt-4 text-green-400 text-center font-hind">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="mt-4 text-red-400 text-center font-hind">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
