"use client";
import { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Skills", "Projects", "Testimonials", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(o => !o);

  return (
    <nav className="fixed w-full bg-[#0E2148] text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="font-bold text-xl">Victor_D3v</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <Anchor key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </Anchor>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggle}>
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-gray-900 shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(item => (
              <Anchor
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-4 border-t border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Anchor>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Anchor({ href, children, className = "", onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`px-2 py-1 hover:text-blue-400 transition ${className}`}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.a>
  );
}
