"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Heart, Eye } from "lucide-react";

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Portrait", "Landscape", "Street", "Architecture"];

  const photos = [
    {
      id: 1,
      title: "Urban Sunset",
      category: "Street",
      image: "/api/placeholder/800/600",
      description: "Capturing the golden hour in downtown cityscape",
      likes: 124,
      views: 1250
    },
    {
      id: 2,
      title: "Mountain Reflection",
      category: "Landscape",
      image: "/api/placeholder/800/600",
      description: "Serene lake reflecting mountain peaks at dawn",
      likes: 89,
      views: 980
    },
    {
      id: 3,
      title: "Portrait Study",
      category: "Portrait",
      image: "/api/placeholder/800/600",
      description: "Natural light portrait with dramatic shadows",
      likes: 156,
      views: 1420
    },
    {
      id: 4,
      title: "Modern Architecture",
      category: "Architecture",
      image: "/api/placeholder/800/600",
      description: "Geometric patterns in contemporary building design",
      likes: 73,
      views: 650
    },
    {
      id: 5,
      title: "Street Life",
      category: "Street",
      image: "/api/placeholder/800/600",
      description: "Candid moments of everyday urban life",
      likes: 102,
      views: 890
    },
    {
      id: 6,
      title: "Coastal Dawn",
      category: "Landscape",
      image: "/api/placeholder/800/600",
      description: "First light breaking over ocean waves",
      likes: 198,
      views: 2100
    },
    {
      id: 7,
      title: "Creative Portrait",
      category: "Portrait",
      image: "/api/placeholder/800/600",
      description: "Artistic interpretation with creative lighting",
      likes: 134,
      views: 1350
    },
    {
      id: 8,
      title: "Glass & Steel",
      category: "Architecture",
      image: "/api/placeholder/800/600",
      description: "Reflections in modern skyscraper facade",
      likes: 67,
      views: 540
    }
  ];

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="photography" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Photography <span>Portfolio</span>
          </h2>
          {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Visual storytelling through the lens - capturing moments, emotions, and perspectives
          </p> */}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(photo)}
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-80">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.category}</p>
                  <div className="flex items-center justify-center space-x-4 mt-2 text-sm">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {photo.likes}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {photo.views}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in photography services or prints?
          </p>
          <button
            onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 mb-3">{selectedImage.description}</p>
                <div className="flex items-center space-x-6">
                  <span className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    {selectedImage.likes} likes
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    {selectedImage.views} views
                  </span>
                  <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
