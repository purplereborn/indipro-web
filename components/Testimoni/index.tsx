"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Title from "../Title";

// Dummy Data
interface TestimoniData {
  name: string;
  desc: string;
  role: string;
  image: string;
}

const dataTestimoni: TestimoniData[] = [
  {
    name: "Rizal",
    desc: "Indipro memberikan pengalaman jual properti yang mudah",
    role: "Pemilik Properti",
    image: "/image/testimoni/IMG_Testimoni_2.jpeg",
  },
  {
    name: "Pak Hady",
    desc: "Sebagai pemilik properti sangat membantu!",
    role: "Pemilik Properti",
    image: "/image/testimoni/IMG_Testimoni_1.jpeg",
  },
  {
    name: "Pak Iwan",
    desc: "Solusi Mencari Properti dengan Pelayanan cepat dan memuaskan.",
    role: "Pembeli Properti",
    image: "/image/testimoni/IMG_Testimoni_3.jpeg",
  },
];

const Testimoni: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperInstanceRef = useRef<any>(null); // Simpan referensi instance Swiper

  useEffect(() => {
    if (
      swiperInstanceRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperInstanceRef.current.params.navigation
    ) {
      const navigationParams = swiperInstanceRef.current.params.navigation;
      if (typeof navigationParams !== "boolean") {
        navigationParams.prevEl = prevRef.current;
        navigationParams.nextEl = nextRef.current;

        // Re-initialize navigation
        swiperInstanceRef.current.navigation.init();
        swiperInstanceRef.current.navigation.update();
      }
    }
  }, [prevRef.current, nextRef.current]); // Tunggu hingga tombol tersedia

  return (
    <div className="w-full bg-blue-600 py-12">
      <div className="px-4 lg:px-12 ">
        <Title title="Kata Mereka" titleColor="text-white" />
      </div>
      {/* Swiper Component */}
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: null, // Diatur nanti melalui useEffect
          nextEl: null, // Diatur nanti melalui useEffect
        }}
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper; // Simpan instance swiper
        }}
        modules={[Navigation, Autoplay]}
        className=""
      >
        {dataTestimoni.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center space-x-4 px-4 py-6 lg:px-12 bg-blue-600">
              <img
                src={item.image}
                alt={item.name}
                className="w-[30vw] h-[30vw] lg:w-60 lg:h-60 rounded-md mb-4"
              />
              <div className="flex-1 flex flex-col space-y-2">
                <div className="text-white lg:text-lg font-semibold italic">
                  &quot; {item.desc} &quot;
                </div>
                <div className="text-white">
                  <p className="font-bold">{item.name}</p>
                  <p className="font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          ref={prevRef}
          className="w-10 h-10 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
        >
          ❮
        </button>
        <button
          ref={nextRef}
          className="w-10 h-10 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Testimoni;
