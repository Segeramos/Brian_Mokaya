import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // replace with EmailJS Service ID
        "your_template_id", // replace with EmailJS Template ID
        form.current,
        "your_public_key" // replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent ✅", result.text);
          e.target.reset();
        },
        (error) => {
          console.log("Message Failed ❌", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-purple-800"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Get in Touch
      </h2>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-8 mb-12 text-purple-700">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-purple-600 text-2xl" />
          <span>youremail@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-purple-600 text-2xl" />
          <span>+254 700 000000</span>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-purple-600 text-2xl" />
          <a
            href="https://linkedin.com/in/yourprofile"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-purple-50 rounded-2xl shadow-lg p-8 border border-purple-200"
      >
        <div className="mb-5">
          <label className="block mb-2 text-purple-800 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-purple-800 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-purple-800 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
