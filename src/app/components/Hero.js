"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-900 dark:from-gray-900 dark:via-black dark:to-blue-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm Bradley</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Software Engineering & Hobbyist Photography
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.querySelector("#engineering").scrollIntoView({ behavior: "smooth" })}
            className="relative px-8 py-3 text-white rounded-full font-medium transition-colors shadow-lg overflow-hidden border-2 border-blue-600 group cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            <span className="relative z-10">Software Engineering</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-300 group-hover:w-full z-0"></span>
          </button>
          <button
            onClick={() => document.querySelector("#photography").scrollIntoView({ behavior: "smooth" })}
            className="relative px-8 py-3 text-white rounded-full font-medium transition-colors shadow-lg overflow-hidden border-2 border-blue-600 group cursor-pointer"
          >
            <span className="relative z-10">Photograph Portfolio</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-300 group-hover:w-full z-0"></span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {[
            { Icon: Github, href: "https://github.com/bradley-cao", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/bradleycao/", label: "LinkedIn" },
            { Icon: Instagram, href: "https://www.instagram.com/bradley_cao/#", label: "Instagram" },
            { Icon: Mail, href: "mailto:bradleycao@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-600 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToNext}
          className="animate-bounce text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </motion.button>
      </div>
    </section>
  );
}
