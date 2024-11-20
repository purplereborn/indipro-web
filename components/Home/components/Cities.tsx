import Title from "@/components/Title";
import React from "react";

function Cities() {
  // `url(${bannerImage})`;
  return (
    <div className="bg-white pt-12 pb-6">
      <div className="px-4 lg:px-12 ">
        <Title
          title="Properti berdasarkan kota"
          desc="Temukan lokasi properti terbaikmu di berbagai kota"
        />
      </div>
      <div className="flex overflow-x-auto w-full space-x-4 px-4 lg:px-12 ">
        {citiesData?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-none w-[40vw] lg:w-[180px] h-[180px] bg-no-repeat bg-cover rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${item?.img})`,
              }}
            >
              <div className=" top-0 left-0 w-full h-full p-3 bg-black/50 hover:bg-black/60 flex  justify-end flex-col cursor-pointer">
                <div className="text-lg font-bold text-white ">
                  {item?.title}
                </div>
                <div className="text-white text-sm">{item?.count} Properti</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cities;

const citiesData = [
  {
    key: "kota_bandung",
    title: "Kota Bandung",
    count: 0,
    img: "/image/cities/IMG_Cities_Bandung.jpeg",
  },
  {
    key: "kab_bandung",
    title: "Kabupaten Bandung",
    count: 0,
    img: "/image/cities/IMG_Cities_KB.jpeg",
  },
  {
    key: "kab_bb",
    title: "Kabupaten Bandung Barat",
    count: 0,
    img: "/image/cities/IMG_Cities_KBB.jpeg",
  },
  {
    key: "cimahi",
    title: "Kota Cimahi",
    count: 0,
    img: "/image/cities/IMG_Cities_Cimahi.jpeg",
  },
  {
    key: "bekasi",
    title: "Bekasi",
    count: 0,
    img: "/image/cities/IMG_Cities_Bekasi.jpeg",
  },
  {
    key: "cikarang",
    title: "Cikarang",
    count: 0,
    img: "/image/cities/IMG_Cities_Cikarang.jpeg",
  },
  {
    key: "karawang",
    title: "Karawang",
    count: 0,
    img: "/image/cities/IMG_Cities_Karawang.jpeg",
  },
  {
    key: "purwakarta",
    title: "Purwakarta",
    count: 0,
    img: "/image/cities/IMG_Cities_Purwakarta.jpeg",
  },
  {
    key: "subang",
    title: "Subang",
    count: 0,
    img: "/image/cities/IMG_Cities_Subang.jpeg",
  },
  {
    key: "garut",
    title: "Garut",
    count: 0,
    img: "/image/cities/IMG_Cities_Garut.jpeg",
  },
];
