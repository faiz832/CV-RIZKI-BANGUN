import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WaButton from "./components/WaButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ArticleDetails from "./pages/ArticleDetails";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <WaButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
