// components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter
} from "react-icons/fa6";

export default function Footer() {
  const socials = [
    { icon: FaGithub, url: "https://github.com/https:/Victor-dev0p" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/victor-erukpe-b32090321" },
    { icon: FaXTwitter, url: "https://twitter.com/DrWoods06" },
  ];
  
  return (
    <footer className="bg-[#0E2148] text-gray-300 py-12">
      <div className="max-w-5xl mx-auto text-center px-4 space-y-6">
        <motion.h2
          className="text-xl sm:text-2xl font-semibold text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Victor Erukpe
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base leading-relaxed text-wrap break-words"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Pixel-pusher and code-crafter on a mission to build stunning, 
          high-performing web experiences. Let’s turn bold ideas into beautiful realities
          one component at a time.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {socials.map(({ icon: Icon, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
        <motion.span
          className="text-xs sm:text-sm block"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          © 2025 Victor_D3v. All rights reserved.
        </motion.span>
      </div>
    </footer>
  );
}
