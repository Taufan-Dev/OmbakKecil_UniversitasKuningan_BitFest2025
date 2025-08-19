// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
import HeaderSection from "./sections/header";
import InfoSection from "./sections/info";
import ArticleSection from "./sections/article";
import AdmissionSection from "./sections/admission";
import PartnersSesction from "./sections/partner";
import PrestasiSecton from "./sections/prestasi";
import Fakultas from "./components/fakultas/Categories";
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

      <HeaderSection language={language} />
      <InfoSection language={language} />
      <Fakultas language={language} />
      <ArticleSection language={language} />
      <PrestasiSecton language={language} />
      <PartnersSesction language={language} />
      <AdmissionSection language={language} />

      {/* Footer selalu di bawah */}
      <Footer language={language} setLanguage={setLanguage} />
    </main>
  );
}
