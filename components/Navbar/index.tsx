"use client";
import Image from "next/image";

function Navbar() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <nav
        className="z-10 h-20 px-4 lg:px-12 py-4 flex items-center justify-between fixed top-0 w-full shadow-md 
          transition duration-300 bg-white bg-opacity-60 backdrop-blur-md"
      >
        <div className="flex flex-row items-center space-x-2">
          <Image
            alt=""
            src={"/image/IMG_logo_small.png"}
            width={50}
            height={0}
          />
          <div className="text-xl font-bold cursor-pointer">INDIPRO</div>
        </div>

        <ul className="hidden lg:flex space-x-12 font-semibold text-black">
          <li>
            <div className="cursor-pointer hover:text-blue-600">Home</div>
          </li>
          <li>
            <div className="cursor-pointer hover:text-blue-600">
              Tentang Kami
            </div>
          </li>
          <li>
            <div className="cursor-pointer hover:text-blue-600">
              List Project
            </div>
          </li>
          <li>
            <div className="cursor-pointer hover:text-blue-600">Layanan</div>
          </li>
        </ul>
        <button
          type="button"
          className="text-white font-medium bg-blue-600 hover:bg-blue-700 rounded-md px-6 py-2.5"
        >
          Hubungi Kami
        </button>
      </nav>
    </>
  );
}

export default Navbar;
