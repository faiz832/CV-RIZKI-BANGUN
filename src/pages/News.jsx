import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function News() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[552px] md:min-h-[calc(100vh-100px)]">
        <h1>News</h1>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
