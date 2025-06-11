import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";

export default function ArticleDetails() {
  const { id } = useParams();
  const articleId = parseInt(id);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-700">Article not found.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-12 md:my-24 max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-semibold">{article.title}</h1>
        <p className="text-sm md:text-base text-gray-600 mt-8">Published: {article.date}</p>
      </div>

      <div className="rounded-3xl overflow-hidden aspect-video">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-12 md:mt-24 max-w-3xl mx-auto text-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: article.content.trim().replace(/\n/g, "<br />"),
          }}
        />
      </div>

      <div class="my-12 md:my-24 flex justify-center">
        <Link to="/" class="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
