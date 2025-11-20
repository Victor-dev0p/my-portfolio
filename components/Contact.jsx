"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-[#0E1B2C] p-6 rounded-xl shadow-md">
      <div className="md:col-span-1">
        <label className="block mb-2 text-sm font-semibold text-white">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="Your Name"
        />
      </div>
      <div className="md:col-span-1">
        <label className="block mb-2 text-sm font-semibold text-white">Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="Your Email"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block mb-2 text-sm font-semibold text-white">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="Your Message"
          rows="5"
        />
      </div>
      <div className="md:col-span-2 text-center">
        <button type="submit" className="bg-[#B417F6] hover:bg-purple-700 text-white px-6 py-2 rounded-full">
          Send Message
        </button>
        {status && <p className="mt-3 text-sm text-white">{status}</p>}
      </div>
    </form>
  );
};

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-900">
        I'm available for freelance or full-time opportunities. Let’s work together!
      </p>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md cursor-pointer"
      >
        Say Hello
      </button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            key="contactForm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden mt-10"
          >
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;