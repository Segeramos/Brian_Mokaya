// src/components/Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // ✅ Replace with your EmailJS Service ID
        "your_template_id", // ✅ Replace with your EmailJS Template ID
        form.current,
        "your_public_key", // ✅ Replace with your EmailJS Public Key
        { disableRedirect: true } // ✅ Prevents redirect
      )
      .then(
        (result) => {
          console.log("Message Sent ✅", result.text);
          toast.success("Message sent successfully! 🎉", {
            position: "top-right",
            autoClose: 3000,
          });
          e.target.reset();
        },
        (error) => {
          console.error("Message Failed ❌", error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG5.png')" }}
    >
      {/* Faded Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Get in Touch
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-8 mb-12 text-purple-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-400 text-2xl" />
            <span>youremail@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-purple-400 text-2xl" />
            <span>+254 700 000000</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-purple-400 text-2xl" />
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
          className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20"
        >
          <div className="mb-5">
            <label className="block mb-2 text-purple-200 font-semibold">
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
            <label className="block mb-2 text-purple-200 font-semibold">
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
            <label className="block mb-2 text-purple-200 font-semibold">
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
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
          >
            Send Message
          </button>

          {/* Toast Notifications */}
          <ToastContainer />
        </form>
      </div>
    </section>
  );
}
