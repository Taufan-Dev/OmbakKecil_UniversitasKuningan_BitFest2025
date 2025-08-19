import React from "react";

type Language = "id" | "en";

interface CallToActionCampusProps {
  language: Language;
}

const CallToActionCampus: React.FC<CallToActionCampusProps> = ({ language }) => {
  const dictionary = {
    id: {
      heading: "Ayo tunggu apa lagi?",
      description:
        "Kesempatan emas menantimu! Daftar kampus sekarang dan raih masa depan cemerlang.",
      button: "Daftar Kampus Sekarang!",
    },
    en: {
      heading: "What are you waiting for?",
      description:
        "A golden opportunity awaits you! Register for campus now and achieve a bright future.",
      button: "Register for Campus Now!",
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 my-10 mx-0 overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full h-40 bg-white rounded-b-full -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 leading-tight mb-6">
          {dictionary[language].heading}
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          {dictionary[language].description}
        </p>
        <a
          href="/register" // bisa diganti route Laravel
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
        >
          {dictionary[language].button}
        </a>
      </div>

      {/* Floating shapes for aesthetic */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-blue-400 rounded-full opacity-10 animate-bounce"></div>
    </section>
  );
};

export default CallToActionCampus;
