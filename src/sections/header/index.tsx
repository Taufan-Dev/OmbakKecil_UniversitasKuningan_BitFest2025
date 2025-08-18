import Header from "../../components/header/index";

export default function HeaderSection() {
  return (
    <>
      <section
        className="relative min-h-screen flex flex-col justify-center items-center mt-16 text-center px-6 md:px-12 overflow-hidden"
        data-aos="zoom-in-down"
      >
        {/* Backgrounds */}
        <div className="absolute inset-0 -z-10">
          {/* Radial gradient kiri atas */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_top_left,_#3b82f6aa,_transparent)]" />

          {/* Setengah lingkaran kanan bawah */}
          <div
            className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[200px] 
                    bg-gradient-to-tl from-blue-400/70 to-transparent 
                    rounded-tl-full"
          />
        </div>

        {/* Judul */}
        <div className="mt-10 max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold leading-tight 
             bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Universitas
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sekunder text-gray-800 mt-2">
            Catur Insan Cendekia
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Mencetak generasi unggul dengan pendidikan berbasis teknologi,
            inovasi, dan karakter.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#program"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg transition"
            >
              Lihat Program
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium transition"
            >
              Tentang Kami
            </a>
          </div>
        </div>

        {/* Slider / Header */}
        <div className="mt-16 w-full">
          <Header />
        </div>
      </section>
    </>
  );
}
