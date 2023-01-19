import React from "react";

export default function Footer() {
  return (
    <div className="mb-6 grid place-content-center">
      <p className="text-main text-lg text-center">
        The is website made by
        <a
          href="https://www.linkedin.com/in/theferdousa/"
          target="_blank"
          className="font-bold ml-[5px]  transition-all duration-300 hover:text-[#445052]"
        >
          Ferdous Al Hasan
        </a>
        . Copyright 2023
      </p>
    </div>
  );
}
