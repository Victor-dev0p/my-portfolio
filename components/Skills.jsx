"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillsGroup } from "@/data/skills";

export default function Skills() {
  const [percentages, setPercentages] = useState([]);

  useEffect(() => {
    // Generate consistent random percentages for all skills
    const generated = skillsGroup.map(group => ({
      title: group.title,
      items: group.items.map(() => Math.floor(Math.random() * 40) + 60),
    }));
    setPercentages(generated);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-[#483AA0] to-[#0E2148]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl text-white font-bold mb-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillsGroup.map((group, i) => (
            <motion.div
              key={group.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl text-white font-semibold">{group.title}</h3>

              {group.items.map((item, idx) => {
                const percent = percentages[i]?.items[idx] ?? 0;
                return (
                  <div key={item} className="flex items-center space-x-3">
                    <span className="w-28 text-sm text-white">{item}</span>
                    <div className="flex-1 bg-gray-200 h-3 rounded overflow-hidden">
                      <motion.div
                        className="bg-blue-600 h-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm text-white">{percent}%</span>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
