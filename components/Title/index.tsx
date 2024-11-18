import React from "react";

function Title({
  title,
  titleSize = "text-lg",
  desc,
  descSize = "text-base",
}: {
  title: string;
  titleSize?: string;
  desc?: string;
  descSize?: string;
}) {
  return (
    <div className="pb-4">
      <div className={`text-black font-semibold ${titleSize}`}>{title}</div>
      {desc && <div className={`text-gray-500 ${descSize}`}>{desc}</div>}
    </div>
  );
}

export default Title;
