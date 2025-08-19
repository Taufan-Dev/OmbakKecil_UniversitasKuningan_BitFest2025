import { useState } from "react";
import { Menu, X } from "lucide-react";

type Language = "id" | "en";

type NavbarProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const translations = {
  id: {
    home: "Beranda",
    article: "Artikel",
    register: "Pendaftaran",
  },
  en: {
    home: "Home",
    article: "Articles",
    register: "Register",
  },
};

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const t = translations[language];

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-md fixed w-full top-0 left-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/logo/logo.png"
          alt="Logo Universitas CIC"
          className="h-20 p-2"
        />

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#", label: t.home },
            { href: "#", label: t.article },
            { href: "#", label: t.register },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="relative font-medium text-gray-700 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500"
            >
              {item.label}
            </a>
          ))}

          {/* Language Switcher Desktop */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                setLanguage("id");
                window.scrollTo(0, 0);
              }}
              className={`rounded-full transition ${
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
              className={`rounded-full transition ${
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
        <div className="md:hidden bg-white/90 backdrop-blur-md px-4 pb-4 shadow transition">
          {[
            { href: "#", label: t.home },
            { href: "#", label: t.article },
            { href: "#", label: t.register },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block py-2 relative font-medium text-gray-700 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500"
            >
              {item.label}
            </a>
          ))}

          {/* Language Switcher Mobile */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => {
                setLanguage("id");
                window.scrollTo(0, 0);
              }}
              className={`rounded-full transition ${
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
              className={`rounded-full transition ${
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
