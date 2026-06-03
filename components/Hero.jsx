import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-[#52357B] to-[#483AA0] py-24"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Full Stack Developer • Product Builder
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building Digital
            <br />
            Products That
            <br />
            Solve Real Problems
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I design and develop scalable web applications,
            business systems, and user-focused products using
            React, Next.js, Firebase, MongoDB, and modern web
            technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.img
            src="/PfP.jpg"
            alt="Victor Erukpe"
            className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-3xl object-cover shadow-2xl"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </div>
    </section>
  );
}