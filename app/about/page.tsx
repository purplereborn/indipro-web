import { MdOutlineSell } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";

export default function page() {
  return (
    <div>
      <div className="h-screen px-4 lg:px-12  flex flex-col justify-center bg-white">
        <div className="text-blue-600 text-3xl font-semibold pb-6">
          Tentang Kami
        </div>
        <div className="text-black font-semibold w-full lg:w-2/3">
          INDIPRO adalah agensi properti berbasis teknologi digital yang
          menyediakan solusi lengkap untuk semua kebutuhan properti Anda. Baik
          menjual, membeli, maupun mengelola properti, kami hadir dengan data
          akurat dan strategi terbaik untuk memastikan pengalaman yang mudah dan
          terpercaya.
        </div>
        <div className="grid grid-cols-3 gap-2 lg:gap-4 py-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 flex flex-col space-y-2 items-center justify-center text-white font-semibold  p-4 rounded-md hover:opacity-90">
            <MdOutlineSell className="text-4xl" />
            <div className="">Jual</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 flex flex-col space-y-2 items-center justify-center text-white font-semibold  p-4 rounded-md hover:opacity-90">
            <MdMiscellaneousServices className="text-4xl" />
            <div className="">Konsultan</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 flex flex-col space-y-2 items-center justify-center text-white font-semibold  p-4 rounded-md hover:opacity-90">
            <MdOutlineShoppingCart className="text-4xl" />
            <div className="">Beli</div>
          </div>
        </div>
      </div>
    </div>
  );
}
