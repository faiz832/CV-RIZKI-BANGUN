import { categories, productsByCategory } from "../data/products";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Pattern2 from "../assets/icons/pattern2.svg";
import Pattern3 from "../assets/icons/pattern3.svg";

export default function Products() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const tabsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const patternVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.2,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <motion.div className="relative overflow-hidden" initial="hidden" animate="visible" variants={containerVariants}>
      {/* Background Patterns with smooth fade */}
      <motion.img src={Pattern3} alt="" className="absolute -right-16 md:right-0 top-10 md:top-12 w-30 md:w-40" variants={patternVariants} />
      <motion.img src={Pattern2} alt="" className="absolute -left-16 md:left-0 top-10 md:top-12 w-30 md:w-40" variants={patternVariants} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with smooth entrance */}
        <motion.h1 className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 my-12" variants={titleVariants}>
          Products
        </motion.h1>

        <div className="mt-12 my-20">
          {/* Category Tabs with delay */}
          <motion.div className="flex justify-center mb-8 space-x-4" variants={tabsVariants}>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`cursor-pointer sm:px-4 sm:py-2 text-sm sm:text-base text-gray-600 border-b-2 hover:text-green-600 hover:border-green-600 transition-colors duration-300 ${
                  activeTab === category.id ? "text-green-600 border-green-600 font-semibold" : "border-transparent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5 + index * 0.1,
                    duration: 0.4,
                  },
                }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Product Cards with AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {productsByCategory[activeTab].map((product, index) => (
                <motion.div
                  key={`${activeTab}-${product.id}-${index}`}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 },
                  }}
                  layout
                >
                  <motion.img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-70 shadow-md object-cover rounded-lg mb-4"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 0.2 + index * 0.1,
                        duration: 0.4,
                      },
                    }}
                  />
                  <div className="flex flex-col flex-grow">
                    <motion.h1
                      className="font-semibold text-xl mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.3 + index * 0.1,
                          duration: 0.4,
                        },
                      }}
                    >
                      {product.name}
                    </motion.h1>
                    <motion.p
                      className="text-md text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.4 + index * 0.1,
                          duration: 0.4,
                        },
                      }}
                    >
                      {product.about}
                    </motion.p>
                    <div className="flex justify-end mt-auto">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay: 0.5 + index * 0.1,
                            duration: 0.3,
                          },
                        }}
                      >
                        <Link to={`/products/${product.id}`} className="inline-block mt-3 px-4 py-2 text-sm font-semibold text-black rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                          More Detail
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
