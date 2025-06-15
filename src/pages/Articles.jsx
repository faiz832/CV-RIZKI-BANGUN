import { Link } from "react-router-dom";
import articles from "../data/articles";
import Pattern2 from "../assets/icons/pattern2.svg";
import Pattern3 from "../assets/icons/pattern3.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Articles() {
  return (
    <>
      <div className="relative overflow-hidden">
        <img src={Pattern3} alt="" className="absolute -right-16 md:right-0 top-10 md:top-12 w-30 md:w-40 opacity-20" />
        <img src={Pattern2} alt="" className="absolute -left-16 md:left-0 top-10 md:top-12 w-30 md:w-40 opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 my-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Articles
          </motion.h1>
          <motion.p className="w-full md:w-2/4 mx-auto text-center text-base sm:text-lg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
            Explore expert insights and industry knowledge about sandblasting, surface preparation, and equipment maintenance.
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {articles.map((article, id) => (
                <motion.div
                  key={id}
                  className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col justify-between"
                  style={{
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: id * 0.05 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <img src={article.image} alt={article.title} className="w-full h-48 shadow-md object-cover rounded-lg mb-4" loading="lazy" />

                  <div className="flex flex-col flex-grow">
                    <h1 className="font-semibold text-lg mb-2">{article.title}</h1>
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">{article.description}</p>

                    <div className="flex justify-end mt-auto">
                      <Link to={`/articles/${article.id}`} className="inline-block mt-3 px-4 py-2 text-sm font-semibold text-black rounded-md bg-gray-100 hover:bg-gray-200 transition">
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
