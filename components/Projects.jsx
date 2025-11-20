// components/Projects.jsx
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 to-[#0E2148]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <img
                src={p.imageSrc}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 flex-1 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-purple-300 border border-purple-300 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  <a
                    href={p.hostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded px-5 py-2 bg-purple-600 text-white font-medium hover:bg-purple-700 transition flex-1 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded px-5 py-2 bg-gray-700 text-gray-200 hover:bg-gray-600 transition flex-1 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
