import React, { useState, useEffect } from "react";

const Navbar = ({ cartCount, setIsCartOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF8F0]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 bg-[#C8A87C] rounded-full flex items-center justify-center text-white font-bold text-lg">
            P
          </div>

          <span
            className={`text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-[#4A3728]" : "text-white"
            }`}
          >
            Prema Bakery
          </span>
        </div>

        <div
          className={`hidden md:flex items-center gap-8 font-medium ${
            scrolled ? "text-[#4A3728]" : "text-white"
          }`}
        >
        
          <button onClick={() => scrollTo("products")}>Products</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("testimonials")}>Reviews</button>
          <button onClick={() => scrollTo("faq")}>FAQ</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

<div className="flex items-center gap-4">
{/* Cart Button */}
<button
  onClick={() => setIsCartOpen(true)}
  className={`relative p-2 rounded-full cursor-pointer transition-colors hover:bg-[#C8A87C]/10 ${
    scrolled ? "text-[#4A3728]" : "text-white"
  }`}
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>

  {cartCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-[#C8A87C] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  )}
</button>

{/* Mobile Menu */}
<button
  className={`md:hidden cursor-pointer p-2 ${
    scrolled ? "text-[#4A3728]" : "text-white"
  }`}
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={
        isMobileMenuOpen
          ? "M6 18L18 6M6 6l12 12"
          : "M4 6h16M4 12h16M4 18h16"
      }
    />
  </svg>
</button>
</div>
</div>
{isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F0] border-t border-[#C8A87C]/20 px-4 py-6 space-y-4">
          <button
            onClick={() => scrollTo("products")}
            className="block w-full text-left py-2"
          >
            Products
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="block w-full text-left py-2"
          >
            About
          </button>

          <button
            onClick={() => scrollTo("testimonials")}
            className="block w-full text-left py-2"
          >
            Reviews
          </button>

          <button
            onClick={() => scrollTo("faq")}
            className="block w-full text-left py-2"
          >
            FAQ
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="block w-full text-left py-2"
          >
            Contact
          </button>
        </div>
      )}
    </nav>

  );
};

export default Navbar;