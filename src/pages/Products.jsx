import { categories, productsByCategory } from "../data/products";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Pattern2 from "../assets/icons/pattern2.svg";
import Pattern3 from "../assets/icons/pattern3.svg";

export default function Products() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <div className="relative overflow-hidden">
      {/* Background Patterns - Static, no animation */}
      <img src={Pattern3} alt="" className="absolute -right-16 md:right-0 top-10 md:top-12 w-30 md:w-40 opacity-20" />
      <img src={Pattern2} alt="" className="absolute -left-16 md:left-0 top-10 md:top-12 w-30 md:w-40 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Products
        </motion.h1>

        <div className="mt-12 my-20">
          {/* Category Tabs */}
          <motion.div className="flex justify-center mb-8 space-x-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`cursor-pointer sm:px-4 sm:py-2 text-sm sm:text-base text-gray-600 border-b-2 hover:text-green-600 hover:border-green-600 transition-all duration-300 ${
                  activeTab === category.id ? "text-green-600 border-green-600 font-semibold" : "border-transparent"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Product Cards */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {productsByCategory[activeTab].map((product, index) => (
                <motion.div
                  key={`${activeTab}-${product.id}-${index}`}
                  className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col justify-between"
                  style={{
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Image - No animation */}
                  <img src={product.thumbnail} alt={product.name} className="w-full h-70 shadow-md object-cover rounded-lg mb-4" loading="lazy" />

                  {/* Content - No animation */}
                  <div className="flex flex-col flex-grow">
                    <h1 className="font-semibold text-xl mb-2">{product.name}</h1>
                    <p className="text-md text-gray-600">{product.about}</p>
                    <div className="flex justify-end mt-auto">
                      <Link to={`/products/${product.id}`} className="inline-block mt-3 px-4 py-2 text-sm font-semibold text-black rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                        More Detail
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
