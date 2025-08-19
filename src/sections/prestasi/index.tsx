import React from "react";

interface Student {
  id: number;
  name: string;
  achievement: {
    id: string;
    en: string;
  };
  photo: string;
}

type Props = {
  language: "id" | "en";
};

const CarouselStudents: React.FC<Props> = ({ language }) => {
  const students: Student[] = [
    {
      id: 1,
      name: "Cristian",
      achievement: {
        id: "Prestasi IPK Terbaik dari Jurusan Teknik Informatika, Angkatan 2016 dengan IPK 4,00.",
        en: "The Best GPA Achievement from the Informatics Engineering Department, Class of 2016 with a GPA of 4.00.",
      },
      photo: "https://www.cic.ac.id/assets/images/prestasi/11776.PNG",
    },
    {
      id: 2,
      name: "Noni Apriliani",
      achievement: {
        id: "Peraih IPK Terbaik dari Jurusan Teknik Informatika, Angkatan 2017 dengan IPK 4,00",
        en: "The Best GPA Achiever from the Informatics Engineering Department, Class of 2017 with a GPA of 4.00",
      },
      photo: "https://www.cic.ac.id/assets/images/prestasi/28738.PNG",
    },
    {
      id: 3,
      name: "Nopi Pitrianingsih",
      achievement: {
        id: "Prestasi IPK Terbaik dari Jurusan Sistem Informasi Akuntansi, Angkatan 2016 dengan IPK 3,95",
        en: "The Best GPA Achievement from the Accounting Computer Information Systems Department, Class of 2016 with a GPA of 3.95",
      },
      photo: "https://www.cic.ac.id/assets/images/prestasi/3317.PNG",
    },
  ];

  const t = {
    id: { title: "🎉 Prestasi Mahasiswa" },
    en: { title: "🎉 Student Achievements" },
  };

  return (
    <section className="my-12">
      <h2 className="text-center text-2xl font-bold text-blue-500 mb-6">
        {t[language].title}
      </h2>

      {/* 3 Mahasiswa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={student.photo}
                alt={student.name}
                className="w-full h-60  transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {student.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {student.achievement[language]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Pajangan */}
      <div className="flex justify-center gap-3 mt-6">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition 
              ${
                num === 1
                  ? "bg-blue-500 text-white shadow"
                  : "bg-gray-200 text-gray-600 cursor-default"
              }`}
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CarouselStudents;
