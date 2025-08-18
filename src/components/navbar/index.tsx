import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
        {/* Logo Gambar */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo/logo.png"
            alt="Logo Universitas CIC"
            className="h-20 p-2"
          />
        </div>

        {/* Links & Search */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 
             after:content-[''] after:absolute after:left-1/2 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-600 
             after:transition-all after:duration-500 after:ease-out
             hover:after:w-full hover:after:left-0"
          >
            Home
          </a>
          <a
            href="#home"
            className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 
             after:content-[''] after:absolute after:left-1/2 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-600 
             after:transition-all after:duration-500 after:ease-out
             hover:after:w-full hover:after:left-0"
          >
            Home
          </a>
          <a
            href="#home"
            className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 
             after:content-[''] after:absolute after:left-1/2 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-600 
             after:transition-all after:duration-500 after:ease-out
             hover:after:w-full hover:after:left-0"
          >
            Home
          </a>
          <a
            href="#home"
            className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 
             after:content-[''] after:absolute after:left-1/2 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-blue-600 
             after:transition-all after:duration-500 after:ease-out
             hover:after:w-full hover:after:left-0"
          >
            Home
          </a>


          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari..."
              className="border rounded-lg pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-4 pb-4">
          <a
            href="#home"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="#program"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Program
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Tentang
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Kontak
          </a>

          {/* Search Bar Mobile */}
          <div className="mt-3 relative">
            <input
              type="text"
              placeholder="Cari..."
              className="w-full border rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
