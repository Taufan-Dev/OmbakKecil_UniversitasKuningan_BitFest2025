import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  language: "id" | "en";
  setLanguage: (lang: "id" | "en") => void;
};

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-10  flex items-center justify-between">
        {/* Logo */}
        <img
          src="/logo/logo.png"
          alt="Logo Universitas CIC"
          className="h-20 p-2"
        />

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>

          {/* Language Switcher Desktop */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                setLanguage("id");
                window.scrollTo(0, 0);
              }}
              className={`rounded-full ${
                language === "id" ? "border-4 border-blue-500" : ""
              }`}
            >
              <img
                src="/logo/id.svg"
                alt="Indonesian flag"
                width={35}
                height={35}
              />
            </button>

            <button
              onClick={() => {
                setLanguage("en");
                window.scrollTo(0, 0);
              }}
              className={`rounded-full ${
                language === "en" ? "border-4 border-blue-500" : ""
              }`}
            >
              <img src="/logo/us.svg" alt="US flag" width={35} height={35} />
            </button>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <a href="#" className="block py-2 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-blue-500">
            About
          </a>
          <a href="#" className="block py-2 hover:text-blue-500">
            Contact
          </a>

          {/* Language Switcher Mobile */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => {
                setLanguage("id");
                window.scrollTo(0, 0);
              }}
              className={`rounded-full ${
                language === "id" ? "border-4 border-blue-500" : ""
              }`}
            >
              <img
                src="/logo/id.svg"
                alt="Indonesian flag"
                width={35}
                height={35}
              />
            </button>

            <button
              onClick={() => {
                setLanguage("en");
                window.scrollTo(0, 0);
              }}
              className={`rounded-full ${
                language === "en" ? "border-4 border-blue-500" : ""
              }`}
            >
              <img src="/logo/us.svg" alt="US flag" width={35} height={35} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
