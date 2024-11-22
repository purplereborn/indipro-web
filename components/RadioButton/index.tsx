import React from "react";

interface IRadioButton {
  label: string;
  checked: boolean;
  value: string;
  onChange: (val: string) => void;
}

export default function RadioButton({
  label,
  checked,
  value,
  onChange,
}: IRadioButton) {
  return (
    <div
      onClick={() => onChange(value)}
      className="flex items-center space-x-4 hover:opacity-75"
    >
      <div className="flex items-center justify-center w-6 h-6 border-[1px] rounded-full border-gray-400">
        {checked ? <div className="w-4 h-4 rounded-full bg-blue-600" /> : null}
      </div>
      <div className="">{label}</div>
    </div>
  );
}
