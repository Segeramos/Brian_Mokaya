import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxx", // ✅ Replace with your actual EmailJS Service ID
        "template_xxxxx", // ✅ Replace with your actual EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // ✅ Replace with your actual EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent ✅", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Message Failed ❌", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG5.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Get in Touch
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20"
        >
          <div className="mb-5">
            <label className="block mb-2 text-purple-200 font-semibold">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-purple-200 font-semibold">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-purple-200 font-semibold">Message</label>
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
        </form>
      </div>
    </section>
  );
}
