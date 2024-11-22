"use client";

import React, { useState } from "react";
import BottomDrawer from "@/components/BottomDrawer";
import RadioButton from "@/components/RadioButton";
import CardProperty from "@/components/CardProperty";

function Page() {
  const [condition, setCondition] = useState({
    new: true,
    second: false,
  });

  const onChangeCondition = (value: string) => {
    setCondition((prevCondition) => ({
      ...prevCondition,
      [value]: !prevCondition[value as keyof typeof prevCondition],
    }));
  };

  return (
    <div className="bg-white px-4 lg:px-12 pt-24 pb-12">
      <div className="w-full flex flex-row space-x-2 lg:space-x-4 bg-white rounded-md">
        <div className="flex-1 flex  bg-white px-4 py-2 rounded-md border-gray-300 hover:border-gray-500 border-[1px] overflow-hidden font-[sans-serif] ">
          <input
            type="text"
            placeholder="Cari Lokasi..."
            className="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
          <svg
            width="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-400"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.25003 10C7.25003 7.37665 9.37667 5.25 12 5.25C14.6234 5.25 16.75 7.37665 16.75 10C16.75 12.6234 14.6234 14.75 12 14.75C9.37667 14.75 7.25003 12.6234 7.25003 10ZM12 6.75C10.2051 6.75 8.75003 8.20507 8.75003 10C8.75003 11.7949 10.2051 13.25 12 13.25C13.795 13.25 15.25 11.7949 15.25 10C15.25 8.20507 13.795 6.75 12 6.75Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.52439 8.85685C3.87872 4.55824 7.47087 1.25 11.7841 1.25H12.216C16.5292 1.25 20.1213 4.55824 20.4757 8.85685C20.666 11.166 19.9527 13.4589 18.4861 15.2526L13.693 21.1144C12.818 22.1845 11.1821 22.1845 10.307 21.1144L5.51399 15.2526C4.04733 13.4589 3.33405 11.166 3.52439 8.85685ZM11.7841 2.75C8.25152 2.75 5.30952 5.45948 5.01932 8.98008C4.8609 10.9019 5.45455 12.8102 6.67521 14.3031L11.4683 20.1649C11.7431 20.501 12.2569 20.501 12.5318 20.1649L17.3248 14.3031C18.5455 12.8102 19.1391 10.9019 18.9807 8.98008C18.6905 5.45948 15.7485 2.75 12.216 2.75H11.7841Z"
            />
          </svg>
        </div>

        <button
          type="button"
          className="text-white font-medium bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2.5"
        >
          Cari Properti
        </button>
      </div>
      <div className="flex flex-wrap py-4">
        <div className="mr-2 mb-2">
          <BottomDrawer buttonTitle="Tipe" title="Tipe properti" />
        </div>
        <div className="mr-2 mb-2">
          <BottomDrawer buttonTitle="Kondisi" title="Kondisi">
            <>
              <div className="mt-5 mb-10 flex flex-col space-y-4">
                <RadioButton
                  label="Baru"
                  checked={condition?.new}
                  value="new"
                  onChange={onChangeCondition}
                />
                <RadioButton
                  label="Bekas"
                  checked={condition?.second}
                  value="second"
                  onChange={onChangeCondition}
                />
              </div>

              <div className="flex flex-row space-x-4">
                <button
                  type="button"
                  className="font-medium text-white  bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 flex items-center space-x-2 "
                >
                  <p>Terapkan</p>
                </button>
                <button
                  type="button"
                  className="font-medium text-blue-700 hover:text-blue-400 border-blue-600 hover:border-blue-400 border-2 rounded-md px-3 py-2 flex items-center space-x-2 "
                >
                  <p>Reset</p>
                </button>
              </div>
            </>
          </BottomDrawer>
        </div>
        <div className="mr-2 mb-2">
          <BottomDrawer buttonTitle="Harga" title="Harga" />
        </div>
        <div className="mr-2 mb-2">
          <BottomDrawer buttonTitle="Urutkan" title="Urutkan" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 ">
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
      </div>
    </div>
  );
}

export default Page;
