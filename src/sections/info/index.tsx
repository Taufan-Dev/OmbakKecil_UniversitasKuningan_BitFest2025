// src/components/CampusInfo.tsx
import React, { useEffect, useState } from "react";
import campusImage from "/header/1.jpg";

type CampusInfoProps = {
  language: "id" | "en";
};

const CampusInfo: React.FC<CampusInfoProps> = ({ language }) => {
  const [content, setContent] = useState({
    title: "",
    subtitle: "",
    description: "",
    button: "",
  });

  const translations = {
    id: {
      subtitle: "UNIVERSITAS CATUR INSAN CENDEKIA",
      title: "Siap Kerja di Era Digital",
      description:
        "Kami menggabungkan kurikulum teknologi dan bisnis yang relevan dengan industri untuk memastikan Anda menjadi lulusan yang kompeten dan paling dicari.",
      button: "Selengkapnya",
    },
    en: {
      subtitle: "CATUR INSAN CENDEKIA UNIVERSITY",
      title: "Ready to Work in the Digital Era",
      description:
        "We combine technology and business curricula relevant to industry to ensure you become the most competent and sought-after graduates.",
      button: "Learn More",
    },
  };

  useEffect(() => {
    setContent(translations[language]);
  }, [language]);

  return (
    <section className="bg-white font-sans px-10 py-16 sm:py-24">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Gambar */}
        <div className="relative">
          <img
            src={campusImage}
            alt="Students walking on campus"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Box Konten */}
        <div className="relative bg-gray-100 lg:w-2xl rounded-lg shadow-xl p-3 md:p-7 md:-ml-28">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
            {content.subtitle}
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            {content.title}
          </h2>

          <p className="text-gray-800 leading-relaxed text-justify  mb-4">
            {content.description}
          </p>

          {/* <a
            href="#tour"
            className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md"
          >
            {content.button}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default CampusInfo;
