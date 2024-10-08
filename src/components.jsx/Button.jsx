import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-xs rounded-md md:text-base text-stone-400 bg-stone-700 hover:text-stone-100 hover:bg-stone-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
