import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-coverflow";
// @ts-ignore
import "swiper/css/pagination";

// Ganti dengan gambar kamu sendiri
import image1 from "/header/2.jpeg";
import image2 from "/header/3.png";
import image3 from "/header/4.jpg";
import image4 from "/header/5.jpg";
import image5 from "/header/6.jpg";

interface Slide {
  name: string;
  src: string;
}

const slides: Slide[] = [
  { name: "Fasilitas", src: image1 },
  { name: "Pengajar", src: image2 },
  { name: "Kurikulum", src: image3 },
  { name: "Prestasi", src: image4 },
  { name: "UKM", src: image5 },
];

const Carousel3: FC = () => {
  return (
    <section className="text-white flex justify-center items-center px-4">
      <Swiper
        grabCursor
        centeredSlides
        speed={600}
        effect="coverflow"
        loop={slides.length > 3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // HP kecil
          640: { slidesPerView: 1.5, spaceBetween: 20 }, // HP besar
          768: { slidesPerView: 2, spaceBetween: 25 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl h-[300px] md:h-[400px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col justify-end items-center rounded-[20px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${slide.src})`,
              filter: "grayscale(0.3) saturate(1.3)",
              WebkitBoxReflect:
                "below 24px linear-gradient(transparent, transparent, #0006)",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent to-black/70 z-0" />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-500 opacity-0 hover:opacity-100">
              <h2 className="text-white font-semibold text-lg md:text-xl mb-2 uppercase">
                {slide.name}
              </h2>
              <a
                href="#"
                className="inline-block uppercase text-white font-medium bg-transparent rounded-full border-2 border-white px-4 py-1.5 text-xs md:text-sm transition duration-300 hover:bg-white hover:text-black"
              >
                Explore
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel3;
