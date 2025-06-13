import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/icons/logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Jika menu terbuka dan klik terjadi di luar menuRef DAN tombol toggle
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest("#menu-toggle")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Articles", path: "/articles" },
    { label: "Products", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 z-50">
            <img src={Logo} alt="CV Rizki Bangun" className="h-6" />
            <h1 className="text-xl font-bold font-montserrat text-[#07960c]">CV. RIZKI BANGUN</h1>
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6 font-satoshi text-sm">
            {menuItems.map(({ label, path }) => (
              <NavLink key={path} to={path} className={({ isActive }) => `rounded-md uppercase ${isActive ? "font-bold text-black" : "text-gray-500"}`}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger Icon */}
          <button id="menu-toggle" onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? (
              // Close Icon (X)
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div ref={menuRef} className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg z-40 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center space-y-4 py-6 font-satoshi text-sm">
            {menuItems.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `uppercase px-4 py-2 rounded-md w-full text-center transition ${isActive ? "font-bold text-black" : "text-gray-500 hover:text-black"}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
