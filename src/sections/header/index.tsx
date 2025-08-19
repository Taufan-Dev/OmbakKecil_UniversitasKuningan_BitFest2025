import Header from "../../components/header/index";

type HeaderSectionProps = {
  language: "id" | "en";
};

export default function HeaderSection({ language }: HeaderSectionProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center mt-16 text-center px-6 md:px-12 overflow-hidden"
      data-aos="zoom-in-down"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_top_left,_#3b82f6aa,_transparent)]" />
      </div>

      {/* Judul */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold leading-tight 
             bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          {language === "id" ? "Universitas" : "University"}
        </h1>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-sekunder text-gray-800 mt-2">
          {language === "id" ? "Catur Insan Cendekia" : "Catur Insan Cendekia"}
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {language === "id"
            ? "Mencetak generasi unggul dengan pendidikan berbasis teknologi, inovasi, dan karakter."
            : "Shaping superior generations through technology-based education, innovation, and character."}
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#program"
            className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg transition"
          >
            {language === "id" ? "Lihat Program" : "View Programs"}
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium transition"
          >
            {language === "id" ? "Tentang Kami" : "About Us"}
          </a>
        </div>
      </div>

      {/* Slider / Header */}
      <div className="mt-16 w-full">
        <Header />
      </div>
    </section>
  );
}
