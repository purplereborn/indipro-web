"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { accordionInitialData } from "./utils/accordion";
import { IAccordion } from "./types";

function NavbarDrawer() {
  const router = useRouter();

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [accordion, setAccordion] =
    useState<IAccordion[]>(accordionInitialData);

  const onChangeDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const onChangeAccordion = (key: string) => {
    setAccordion((prevAccordion) =>
      prevAccordion.map((item) => ({
        ...item,
        checked: item.key === key ? !item.checked : false,
      }))
    );
  };

  const onClickHome = () => {
    router.push("/");
  };

  const onClickAbout = () => {
    router.push("/about");
  };

  const onClickProperti = () => {
    router.push("/property");
  };

  const onClickService = () => {
    router.push("/service");
  };

  return (
    <div className="drawer z-20 fixed text-black">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={onChangeDrawer}
      />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar h-16 shadow-md w-full lg:px-12 bg-white bg-opacity-60 backdrop-blur-md space-x-2">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none flex flex-row items-center space-x-2">
            <Image
              alt=""
              src={"/image/IMG_logo_small.png"}
              width={50}
              height={0}
            />
            <div className="text-xl font-semibold cursor-pointer ">INDIPRO</div>
          </div>

          <div className="flex-1 hidden lg:flex lg:justify-center lg:items-center">
            <ul className="hidden lg:flex lg:flex-row lg:space-x-12 text-sm font-semibold">
              {/* Navbar menu content here */}
              <li>
                <div
                  className="cursor-pointer hover:text-blue-600"
                  onClick={onClickHome}
                >
                  Beranda
                </div>
              </li>

              <li>
                <div
                  className="cursor-pointer hover:text-blue-600"
                  onClick={onClickProperti}
                >
                  List Properti
                </div>
              </li>
              <li>
                <div
                  className="cursor-pointer hover:text-blue-600"
                  onClick={onClickService}
                >
                  Jasa
                </div>
              </li>
              <li>
                <div
                  className="cursor-pointer hover:text-blue-600"
                  onClick={onClickAbout}
                >
                  Tentang Kami
                </div>
              </li>
              <li>
                <div className="cursor-pointer hover:text-blue-600">
                  Lainnya
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden flex-none lg:block text-sm">
            <button
              type="button"
              className="text-white  bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="bg-white min-h-full w-80 ">
          <div className="border-b-[1px] h-16 px-4 flex-none flex flex-row items-center space-x-2 justify-between">
            <div className="flex space-x-2 items-center">
              <Image
                alt=""
                src={"/image/IMG_logo_small.png"}
                width={50}
                height={0}
              />
              <div className="text-xl font-semibold cursor-pointer ">
                INDIPRO
              </div>
            </div>
            <button
              className="hover:bg-gray-100 flex items-center border-[1px] rounded-full p-1  border-gray-600"
              onClick={onCloseDrawer}
            >
              <svg
                aria-label="Tutup"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0607 9L4.06066 3L3 4.06066L9 10.0607L3.06066 16L4.12132 17.0607L10.0607 11.1213L15.7279 16.7886L16.7886 15.7279L11.1213 10.0607L16.8492 4.33274L15.7886 3.27207L10.0607 9Z"
                ></path>
              </svg>
            </button>
          </div>
          {accordion?.map((item) => {
            return (
              <div
                key={item?.key}
                className="collapse collapse-arrow bg-whihte border-b-[1px] rounded-none "
              >
                <input
                  type="checkbox"
                  name="my-accordion-2"
                  onChange={() => onChangeAccordion(item?.key)}
                  checked={item?.checked}
                />
                <div
                  className={
                    "collapse-title flex items-center text-sm font-semibold text-black"
                  }
                >
                  {item?.title}
                </div>
                <ul
                  className="collapse-content bg-slate-50"
                  style={{ padding: 0 }}
                >
                  {item?.list?.map((itemList) => {
                    return (
                      <li key={itemList?.title} className="p-4 border-b-[1px]">
                        <a className="link link-hover">{itemList?.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavbarDrawer;
