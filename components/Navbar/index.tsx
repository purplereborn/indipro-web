"use client";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onClickNav = () => {
    setIsNavOpen((prev) => !prev);
  };

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
        <div onClick={onClickNav} className="flex lg:hidden">
          <svg
            width="24px"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-600"
          >
            <path d="M17 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z" />
          </svg>
        </div>
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
          className="hidden lg:flex text-white font-medium bg-blue-600 hover:bg-blue-700 rounded-md px-6 py-2.5"
        >
          Hubungi Kami
        </button>
      </nav>
      {isNavOpen ? (
        <div className="bg-white fixed h-full w-full top-0 right-0 z-10  px-4">
          <div className="h-[80px] flex items-center">
            <div onClick={onClickNav} className="">
              <svg
                width="30px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g transform="translate(-288.000000, 0.000000)">
                    <g
                      id="close_line"
                      transform="translate(288.000000, 0.000000)"
                    >
                      <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"></path>
                      <path
                        d="M12,13.4144 L17.6568,19.0713 C18.0473,19.4618 18.6805,19.4618 19.071,19.0713 C19.4615,18.6807 19.4615,18.0476 19.071,17.657 L13.4142,12.0002 L19.071,6.34335 C19.4615,5.95283 19.4615,5.31966 19.071,4.92914 C18.6805,4.53861 18.0473,4.53861 17.6568,4.92914 L12,10.586 L6.34309,4.92912 C5.95257,4.5386 5.3194,4.5386 4.92888,4.92912 C4.53836,5.31965 4.53836,5.95281 4.92888,6.34334 L10.5857,12.0002 L4.92888,17.6571 C4.53836,18.0476 4.53836,18.6807 4.92888,19.0713 C5.3194,19.4618 5.95257,19.4618 6.34309,19.0713 L12,13.4144 Z"
                        className="fill-gray-600"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
