// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
import HeaderSection from "./sections/header";
import InfoSection from "./sections/info";

import "./App.css";

type Language = "id" | "en";

export default function App() {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    // @ts-ignore
    AOS.init();
  }, []);

  return (
    <main className="relative">
      {/* Navbar selalu di atas */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Wrapper untuk Header + Info */}
      <section className="relative overflow-hidden">
        <HeaderSection language={language} />
        <InfoSection language={language} />

        {/* Gradient Lingkaran Kanan Bawah */}
        <div
          className="hidden md:block absolute -bottom-32 right-0 w-[500px] h-[500px] 
  bg-gradient-to-tl from-blue-500/70 to-transparent 
  rounded-tl-full z-0"
        />
      </section>

      {/* Footer di bawah, tidak kena gradient */}
      <Footer language={language} setLanguage={setLanguage} />
    </main>
  );
}
