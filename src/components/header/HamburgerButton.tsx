"use client";

import { useState } from "react";

export default function HamburgerButton({
  onClick,
  open,
}: {
  onClick?: () => void;
  open: any;
}) {
  return (
    <button
      onClick={onClick}
      aria-label='Toggle menu'
      className='relative w-12 h-12 text-gray-700 dark:text-gray-200 focus:outline-none'>
      <div className='absolute left-1/2 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2'>
        {/* Top line */}
        <span
          className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}></span>

        {/* Middle line */}
        <span
          className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
            open ? "opacity-0" : "opacity-100"
          }`}></span>

        {/* Bottom line */}
        <span
          className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}></span>
      </div>
    </button>
  );
}
