"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              Creative developer and visual artist passionate about building innovative 
              solutions and capturing beautiful moments.
            </p>
          </div> */}

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Engineering", href: "#engineering" },
                // { label: "Photography", href: "#photography" },
                { label: "Resume", href: "#resume" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Portrait Photography</li>
              <li>Event Photography</li>
              <li>Photo Editing</li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">

          
          <div className="text-gray-300 text-sm">
            © {currentYear} Bradley Cao. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
