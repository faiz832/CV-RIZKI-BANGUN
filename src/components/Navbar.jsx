import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={`sticky top-0 z-20 w-full flex-none bg-white transition-all duration-300 ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="w-full flex justify-between">
            {/* Brand Logo */}
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center gap-2">
                <img src="/src/assets/icons/logo.svg" alt="CV Rizki Bangun" className="h-6" />
                <h1 className="text-xl font-bold font-montserrat text-[#07960c]">CV. RIZKI BANGUN</h1>
              </NavLink>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center space-x-4 font-satoshi text-sm">
              {["/", "/news", "/product", "/contact"].map((path, i) => {
                const labels = ["Home", "News", "Product", "Contact"];
                return (
                  <NavLink key={path} to={path} className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? "font-bold text-black" : "text-gray-500"}`}>
                    {labels[i]}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
