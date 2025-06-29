"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Database, Globe, Smartphone } from "lucide-react";

export default function Engineering() {
  const projects = [
    {
      title: "Multicast Mobile",
      description: "IETF 117 demo project supporting TreeDN for MBONED and MOPS working groups, demonstrating \
                    unicast to multicast translation from a mobile device",
      image: "/images/multicast.png",
      tech: ["Python", "FFmpeg", "Android", "Kivy"],
      github: "https://github.com/bradley-cao/Multicast-Mobile",
      live: "#",
      // category: "Mobile",
    },
    {
      title: "Canny Edge Detection",
      description: "Canny Edge Detection with hysteris thresholding and non-maximum suppression implemented from scratch, with \
                    export to PPM format for visualization in GIMP",
      image: "/images/edgedetector.png",
      tech: ["C++", "Computer Vision", "GIMP", "GCC", "Linux"],
      github: "https://github.com/bradley-cao/canny-edge-detector",
      live: "#",
    },
    {
      title: "News Comparator",
      description: "Web App utilizing Natural Language Processing to compare text of user inputted articles and highlight discrepancies. \
                    Winner of Washington Post Challenge at Hack TJ 9.0",
      image: "/images/news.png",
      tech: ["Python", "Flask", "NLTK", "BeautifulSoup", "HTML/CSS"],
      github: "https://github.com/bradley-cao/News-Comparator",
      live: "#",
    },
    {
      title: "Energy Undead",
      description: "Unity serious game for Hack TJ 10.0, applying fun style and game mechanics to teach real world energy saving concepts, \
                    teaching users how to be more eco-friendly",
      image: "/images/energy.png",
      tech: ["C#", "Unity", "WebGL"],
      github: "https://github.com/bradley-cao/Energy-Undead",
      live: "#",
    }
  ];

  // const categories = ["All", "Full Stack", "Web App", "Mobile", "Data Viz"];
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // const filteredProjects = selectedCategory === "All" 
  //   ? projects 
  //   : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="engineering" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span>Software Engineering Projects</span>
          </h2>

          {/* Category Filter, maybe include later with more projects */}

          {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* {filteredProjects.map((project, index) => { */}
          {projects.map((project, index) => {
            const Icon = project.image;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <Icon className="w-20 h-20 text-white opacity-50" /> */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center justify-between">
                      <a href={project.github} target="_blank">
                        {project.title}
                      </a>
                      <span className="flex space-x-2 ml-4">
                        <a
                          href={project.github}
                          target="_blank"
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        {/* <a
                          href={project.live}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a> */}
                      </span>
                    </h3>
                  </div>
                  
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Below to be included later*/}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <button
            onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
            className="relative px-8 py-3 text-white rounded-full font-medium transition-colors shadow-lg overflow-hidden border-2 
                       border-blue-600 group cursor-pointer"
          >
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-300 group-hover:w-full z-0"></span>
          </button>
        </motion.div>     */}
      </div>
    </section>
  );
}
