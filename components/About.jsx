// components/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-tr from-gray-100 to-white overflow-hidden">
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 filter blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

          <div className="text-gray-700 leading-relaxed text-wrap break-words font-semibold">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I’m a passionate frontend web developer with a strong focus on building user-friendly, 
              responsive, and performance-driven web applications. I’ve worked on a variety of impactful projects—from 
              SEO optimization tools to fintech dashboards and community platforms—bringing ideas to life with clean, 
              maintainable code. My experience spans modern frameworks like React and Next.js, 
              and I enjoy crafting interfaces that balance visual appeal with functionality. 
            </motion.div>
          </div>

          <div className="text-gray-700 leading-relaxed text-wrap break-words font-semibold">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Whether it's integrating Firebase backends, optimizing UI for mobile-first experiences, 
              or collaborating with teams on real-world products, I bring a problem-solving mindset 
              and a deep understanding of what makes digital experiences seamless and engaging.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
