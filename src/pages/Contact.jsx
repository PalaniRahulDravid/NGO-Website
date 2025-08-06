import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-8">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-950 p-6 shadow-lg rounded-lg border border-gray-800"
        >
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 text-white rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 text-white rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 text-white rounded px-3 py-2"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">
            Connect with us
          </h3>
          <div className="flex justify-center gap-6 text-2xl text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;