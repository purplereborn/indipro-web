import CardProperty from "@/components/CardProperty";
import Title from "@/components/Title";
import React from "react";

function Popular() {
  return (
    <div className="bg-white py-6">
      <div className="px-4 lg:px-12 ">
        <Title
          title="Properti Populer"
          desc="Properti yang paling banyak dilihat"
        />
      </div>

      <div className="flex overflow-x-auto w-full space-x-4 pb-4 px-4 lg:px-12 ">
        <CardProperty className="flex-none w-[300px]" />
        <CardProperty className="flex-none w-[300px]" />
        <CardProperty className="flex-none w-[300px]" />
        <CardProperty className="flex-none w-[300px]" />
        <CardProperty className="flex-none w-[300px]" />
        <CardProperty className="flex-none w-[300px]" />
        <CardProperty className="flex-none w-[300px]" />
        <CardProperty className="flex-none w-[300px]" />
      </div>
    </div>
  );
}

export default Popular;
