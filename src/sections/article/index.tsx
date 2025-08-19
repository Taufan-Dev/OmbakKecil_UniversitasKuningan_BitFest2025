import React from "react";

interface CampusInfo {
  id: number;
  title: string;
  image: string;
  link: string;
}

const CampusSection: React.FC = () => {
  // Data dummy, bisa diganti dari API / props Laravel
  const campusInfos: CampusInfo[] = [
    {
      id: 1,
      title: "Fasilitas Perpustakaan Modern dengan Koleksi Lengkap",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      id: 2,
      title: "Kegiatan Mahasiswa: Organisasi dan UKM Kampus",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      id: 3,
      title: "Informasi Beasiswa untuk Mahasiswa Baru",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      link: "#",
    },
  ];

  return (
    <section className="px-4 lg:px-16 mt-10">
      <h1 className="lg:text-4xl font-semibold text-blue-500 mb-5">
        🎓 Info Kampus
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Hero Info Kampus */}
        <div className="relative h-[320px] md:h-[480px] rounded-3xl overflow-hidden group shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&h=700&fit=crop"
            alt="Gedung Kampus"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-8 text-white">
            <a href="#" className="block">
              <h2 className="text-2xl md:text-4xl font-bold leading-snug drop-shadow-lg">
                Kampus Hijau: Lingkungan Belajar Nyaman dan Modern
              </h2>
              <p className="text-blue-300 font-semibold mt-3 hover:underline">
                Baca Selengkapnya{" "}
                <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </a>
          </div>
        </div>

        {/* Info Lain */}
        <div className="flex flex-col gap-6">
          {campusInfos.map((info) => (
            <div
              key={info.id}
              className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={info.image}
                alt={info.title}
                className="w-24 h-24 md:w-32 md:h-28 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <a
                  href={info.link}
                  className="text-blue-500 font-medium hover:underline text-sm"
                >
                  Baca Selengkapnya{" "}
                  <i className="fa-solid fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <div className="pt-4 text-center">
            <a
              href="/campus" // ganti sesuai route Laravel
              className="inline-flex gap-3 text-blue-500 border border-blue-500 hover:text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-blue-500 transition duration-300"
            >
              Telusuri Semua Info Kampus
              <i className="fa-solid fa-search"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
