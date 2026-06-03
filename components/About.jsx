// components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-tr from-gray-100 to-white overflow-hidden"
    >
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 filter blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-gray-700 leading-8 text-lg">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I'm a Full Stack Web Developer focused on building products
              that solve real business and human problems. My experience spans
              customer-facing platforms, operational management systems,
              event solutions, e-commerce platforms, and behavioral
              accountability applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I specialize in JavaScript, TypeScript, React, Next.js,
              Firebase, MongoDB, and modern web technologies, transforming
              ideas into scalable, user-centered digital products.
              From leading the development of production systems to
              creating applications that encourage user engagement and
              accountability, I enjoy turning complex challenges into
              intuitive experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Beyond writing code, I think deeply about user behavior,
              workflows, business outcomes, and product strategy.
              My goal is not just to build software, but to create solutions
              that deliver measurable value and meaningful impact.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}