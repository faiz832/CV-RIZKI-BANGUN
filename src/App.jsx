import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
