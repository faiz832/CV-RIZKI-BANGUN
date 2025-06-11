import { categories, productsByCategory } from "../data/products";
import { useState } from "react";
import Pattern2 from "../assets/icons/pattern2.svg";
import Pattern3 from "../assets/icons/pattern3.svg";

export default function Products() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <>
      <div className="relative overflow-hidden">
        <img src={Pattern3} alt="" className="absolute right-0 top-12 w-40 opacity-20" />
        <img src={Pattern2} alt="" className="absolute left-0 top-12 w-40 opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 my-12">Products</h1>
          <p className="w-full lg:w-2/4 mx-auto text-center text-lg">Explore expert insights and industry knowledge about sandblasting, surface preparation, and equipment maintenance.</p>

          <div className="mt-12 my-20">
            <div className="flex justify-center mb-8 space-x-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`cursor-pointer px-4 py-2 text-sm sm:text-base text-gray-600 border-b-2 hover:text-green-600 hover:border-green-600 ${
                    activeTab === category.id ? "text-green-600 border-green-600 font-semibold" : "border-transparent"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsByCategory[activeTab].map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out transform flex flex-col justify-between">
                  <img src={product.thumbnail} alt={product.name} className="w-full h-70 shadow-md object-cover rounded-lg mb-4" loading="lazy" />
                  <div className="flex flex-col flex-grow">
                    <h1 className="font-semibold text-xl mb-2">{product.name}</h1>
                    <p className="text-md text-gray-600 min-h-16">{product.about}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
