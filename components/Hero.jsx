import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-[#52357B] to-[#483AA0] py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hello, I’m Victor<br />A Frontend Web Developer
          </motion.h1>
          <motion.p
            className="text-lg text-white max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I build responsive, accessible web apps using modern tools and frameworks.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.img
            src="/PfP.jpg"
            alt="Your Name"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}