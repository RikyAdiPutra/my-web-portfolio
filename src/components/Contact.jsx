"use client";

import emailjs from "emailjs-com";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_fb0ht9k",
        "template_yjz1jyr",
        templateParams,
        "7EwoD37KBURq7vm0k"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Message failed to send. Please try again.");
        }
      );
  };
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center font-hind">
          Contact
        </h2>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-gray-800 shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-semibold mb-2 font-hind"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-semibold mb-2 font-hind"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                  placeholder="Your Message"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
