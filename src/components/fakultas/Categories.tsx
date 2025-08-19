import React from "react";
import CategoryCard from "./CategoryCard";
import "./Categories.css";

import {
  FaCode,
  FaNetworkWired,
  FaPalette,
  FaTasks,
  FaCalculator,
  FaBriefcase,
  FaUsers,
  FaCertificate,
  FaShoppingCart,
  FaChartBar,
  FaFutbol,
} from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";

type Language = "id" | "en";

interface Category {
  logo: React.ReactNode;
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
}

interface CategoriesProps {
  language: Language;
}

const categoriesDataRow1: Category[] = [
  {
    logo: <FaCode size={32} color="#4A90E2" />,
    title: { id: "S1 TEKNIK INFORMATIKA", en: "BSc Informatics Engineering" },
    subtitle: {
      id: "Program studi pengembangan software.",
      en: "Software development study program.",
    },
  },
  {
    logo: <BsDatabaseFillGear size={32} color="#F5A623" />,
    title: { id: "S1 SISTEM INFORMASI", en: "BSc Information Systems" },
    subtitle: {
      id: "Program studi pengelolaan sistem informasi modern.",
      en: "Modern information systems management program.",
    },
  },
  {
    logo: <FaPalette size={32} color="#D0021B" />,
    title: {
      id: "S1 DESAIN KOMUNIKASI VISUAL",
      en: "BSc Visual Communication Design",
    },
    subtitle: {
      id: "Program kreatif industri kreatif modern.",
      en: "Creative program for modern creative industry.",
    },
  },
  {
    logo: <FaTasks size={32} color="#7ED321" />,
    title: {
      id: "D3 MANAJEMEN INFORMATIKA",
      en: "Diploma in Informatics Management",
    },
    subtitle: {
      id: "Program diploma di bidang teknologi informasi dan manajemen.",
      en: "Diploma program in IT and management.",
    },
  },
  {
    logo: <FaCalculator size={32} color="#50E3C2" />,
    title: { id: "S1 AKUNTANSI", en: "BSc Accounting" },
    subtitle: {
      id: "Program studi analisis keuangan yang unggul.",
      en: "Excellent financial analysis study program.",
    },
  },
  {
    logo: <FaBriefcase size={32} color="#4A4A4A" />,
    title: { id: "S1 MANAJEMEN REGULER", en: "BSc Management Regular" },
    subtitle: {
      id: "Program studi masa depan dengan kurikulum komprehensif.",
      en: "Future-oriented study program with comprehensive curriculum.",
    },
  },
];

const categoriesDataRow2: Category[] = [
  {
    logo: <FaUsers size={32} color="#5566c3" />,
    title: { id: "S1 MANAJEMEN KARYAWAN", en: "BSc Employee Management" },
    subtitle: {
      id: "Manajemen sumber daya manusia dan pengembangan karir.",
      en: "Human resources management and career development.",
    },
  },
  {
    logo: <FaCertificate size={32} color="#bd10e0" />,
    title: {
      id: "S1 MANAJEMEN RPL",
      en: "BSc Recognition of Prior Learning Management",
    },
    subtitle: {
      id: "Pengakuan pembelajaran lampau untuk profesional.",
      en: "Recognition of prior learning for professionals.",
    },
  },
  {
    logo: <FaShoppingCart size={32} color="#e07b10" />,
    title: { id: "S1 BISNIS DIGITAL", en: "BSc Digital Business" },
    subtitle: {
      id: "Strategi bisnis di era teknologi dan e-commerce.",
      en: "Business strategies in the technology and e-commerce era.",
    },
  },
  {
    logo: <FaChartBar size={32} color="#2986cc" />,
    title: { id: "S1 MANAJEMEN BISNIS", en: "BSc Business Management" },
    subtitle: {
      id: "Manajemen operasional dan strategi pengembangan bisnis.",
      en: "Operational management and business development strategy.",
    },
  },
  {
    logo: <FaFutbol size={32} color="#000000" />,
    title: {
      id: "S1 PENDIDIKAN KEPELATIHAN OLAHRAGA",
      en: "BSc Sports Coaching Education",
    },
    subtitle: {
      id: "Mencetak pelatih dan pendidik olahraga profesional.",
      en: "Training professional sports coaches and educators.",
    },
  },
];

const Categories: React.FC<CategoriesProps> = ({ language }) => {
  return (
    <div className="scrolling-container">
      <h1 className="items-center text-4xl text-blue-500 text-center font-primary mb-3 font-semibold">
        {language === "id" ? "Program studi" : "Study Programs"}
      </h1>

      {/* Baris Pertama */}
      <div className="scrolling-row">
        <div className="scrolling-content">
          {categoriesDataRow1.map((category, index) => (
            <CategoryCard
              key={`r1-${index}`}
              logo={category.logo}
              title={category.title[language]}
              subtitle={category.subtitle[language]}
            />
          ))}
          {categoriesDataRow1.map((category, index) => (
            <CategoryCard
              key={`r1-dup-${index}`}
              logo={category.logo}
              title={category.title[language]}
              subtitle={category.subtitle[language]}
            />
          ))}
        </div>
      </div>

      {/* Baris Kedua */}
      <div className="scrolling-row reverse">
        <div className="scrolling-content">
          {categoriesDataRow2.map((category, index) => (
            <CategoryCard
              key={`r2-${index}`}
              logo={category.logo}
              title={category.title[language]}
              subtitle={category.subtitle[language]}
            />
          ))}
          {categoriesDataRow2.map((category, index) => (
            <CategoryCard
              key={`r2-dup-${index}`}
              logo={category.logo}
              title={category.title[language]}
              subtitle={category.subtitle[language]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
