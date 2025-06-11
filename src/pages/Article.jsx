import Article1 from "../assets/images/article-1.png";
import Article2 from "../assets/images/article-2.png";
import Article3 from "../assets/images/article-3.png";
import Article4 from "../assets/images/article-4.png";

export default function Article() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 my-12">Article</h1>
        <p class="w-full lg:w-2/4 mx-auto text-center text-lg">We provide a wide range of articles to help you understand the sandblasting process and its applications.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 mt-12 mb-20">
          {[
            {
              title: "Understanding Sandblasting Techniques and Work Methods",
              description: "Explains various sandblasting methods such as dry blasting, steam blasting, and vacuum blasting, as well as their applications in industry.",
              image: Article1, // ganti path sesuai gambar
            },
            {
              title: "Getting to Know the Types of Sandblasting Machines & Their Applications",
              description: "Explains various methods and types of sandblasting machines and how they are used in the shipbuilding, steel and manufacturing industries.",
              image: Article2,
            },
            {
              title: "How is Sandblasting Used in Iron and Steel Fabrication Process?",
              description: "Explains the importance of sandblasting in preparing iron and steel surfaces before the finishing process.",
              image: Article3,
            },
            {
              title: "Sandblasting Can Remove Industrial Tool Dirt",
              description: "The sandblasting process is an effective method for cleaning industrial tools from dirt and rust.",
              image: Article4,
            },
          ].map((article, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out transform flex flex-col justify-between">
              <img src={article.image} alt={article.title} className="w-full h-48 shadow-md object-cover rounded-lg mb-4" loading="lazy" />

              <div className="flex flex-col flex-grow">
                <h1 className="font-semibold text-lg mb-2">{article.title}</h1>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{article.description}</p>

                <div className="flex justify-end mt-auto">
                  <a href="#" className="text-center font-semibold bg-gray-800 text-sm hover:bg-gray-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
