"use client";

import { motion } from "framer-motion";
import { Code, Camera, Palette, Zap, Bot, Cpu, Braces } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "AI/ML Engineering",
      icon: Bot,
      skills: ["Computer Vision", "Natural Language Processing", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"],
      color: "bg-blue-500"
    },
    {
      category: "Full Stack Development",
      icon: Code,
      skills: ["Javascript", "Python", "SQL", "REST APIs", "NextJS", "React", "Node.js"],
      color: "bg-green-500"
    },
    {
      category: "Embedded Systems",
      icon: Cpu,
      skills: ["Arduino", "C/C++", "Docker", "Linux", "Assembly"],
      color: "bg-purple-500"
    },
    {
      category: "Other SDE Skills",
      icon: Braces,
      skills: ["Version Control (Git)", "Agile Methodologies", "Unit Testing", "CI/CD", "Docker", "IP Networking"],
      color: "bg-yellow-500"
    }
    // {
    //   category: "Design",
    //   icon: Palette,
    //   skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Color Theory", "Typography", "Visual Composition"],
    //   color: "bg-pink-500"
    // }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span>About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a computer science student at Georgia Tech in the Cybersecurity + Intelligence Threads. 
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="/images/profile.jpeg"
                  alt="Bradley Cao"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Originally from the Northern Virginia area, I am a computer science student at Georgia Tech with focuses in the Cybersecurity
              and Intelligence Threads.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of software engineering, I am an aspiring hobbyist photographer. I am also a semi-active competitive swimmer, swimming 
              on the GT club team. Some of my hobbies and interests include aviation and aerospace, so you might see me planespotting here and 
              there.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`${skillGroup.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="text-sm text-gray-600 dark:text-gray-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
