import React from "react";

export const Input = ({id, type, label, placeholder}) => {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="block w-full h-11 rounded-md placeholder:text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
      />
    </div>
  );
};
