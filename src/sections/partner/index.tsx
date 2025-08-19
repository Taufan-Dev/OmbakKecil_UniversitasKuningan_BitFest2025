import React from "react";

type Language = "id" | "en";

interface Partner {
  id: number;
  logo: string;
}

interface CampusPartnersProps {
  language: Language;
}

const CampusPartners: React.FC<CampusPartnersProps> = ({ language }) => {
  const dictionary = {
    id: {
      title: "Partner Kampus",
      subtitle: "Mitra Resmi",
    },
    en: {
      title: "Campus Partners",
      subtitle: "Official Partners",
    },
  };

  const partners: Partner[] = [
    {
      id: 1,
      logo: "https://www.cic.ac.id/assets/images/afliasi/yh.png",
    },
    {
      id: 2,
      logo: "https://www.cic.ac.id/assets/images/afliasi/21.png",
    },
    {
      id: 3,
      logo: "https://www.cic.ac.id/assets/images/afliasi/pb.jpg",
    },
    {
      id: 4,
      logo: "https://www.cic.ac.id/assets/images/afliasi/esda.png",
    },
    {
      id: 5,
      logo: "https://www.cic.ac.id/assets/images/afliasi/ef.png",
    },
  ];

  return (
    <section
      className="mt-14 text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="text-blue-500 text-3xl font-semibold">
        {dictionary[language].title}
      </h1>
      <h2 className="text-2xl font-semibold font-thrird ">
        {dictionary[language].subtitle}
      </h2>

      <div
        className="flex flex-wrap justify-center items-center gap-10 mt-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="transition duration-500 hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={`Partner ${partner.id}`}
              className="w-[150px] h-[150px] object-contain grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusPartners;
