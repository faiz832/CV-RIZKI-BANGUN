import { Link } from "react-router-dom";
import articles from "../data/articles";
import Pattern2 from "../assets/icons/pattern2.svg";
import Pattern3 from "../assets/icons/pattern3.svg";

export default function Articles() {
  return (
    <>
      <div className="relative overflow-hidden">
        <img src={Pattern3} alt="" className="absolute -right-16 md:right-0 top-10 md:top-12 w-30 md:w-40 opacity-20" />
        <img src={Pattern2} alt="" className="absolute -left-16 md:left-0 top-10 md:top-12 w-30 md:w-40 opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 my-12">Articles</h1>
          <p className="w-full md:w-2/4 mx-auto text-center text-base sm:text-lg">Explore expert insights and industry knowledge about sandblasting, surface preparation, and equipment maintenance.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 mb-20">
            {articles.map((article, id) => (
              <div key={id} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out transform flex flex-col justify-between">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
