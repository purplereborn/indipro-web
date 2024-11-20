import React from "react";

function Title({
  title,
  titleSize = "text-lg",
  titleColor = "text-black",
  desc,
  descSize = "text-base",
  descColor = "text-gray-500",
}: {
  title: string;
  titleSize?: string;
  titleColor?: string;
  desc?: string;
  descSize?: string;
  descColor?: string;
}) {
  return (
    <div className="pb-4">
      <div className={`${titleColor} font-semibold ${titleSize}`}>{title}</div>
      {desc && <div className={`${descColor} ${descSize}`}>{desc}</div>}
    </div>
  );
}

export default Title;
