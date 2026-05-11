import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Mob() {
  const [open, setActive] = useState(false);

  return (
    <>
      <nav className="bg-gray-50 py-4">
        <div className="container px-2 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-lg md:text-2xl">
            <span className="text-gray-800 font-bold">Seeds</span>
            <span className="text-red-500">Sn</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-5">
            <li className="text-gray-500 cursor-pointer">Home</li>
            <li className="text-gray-500 cursor-pointer">Fashion</li>
            <li className="text-gray-500 cursor-pointer">Electronics</li>
            <li className="text-gray-500 cursor-pointer">Digital Gadgets</li>
          </ul>

          {/* Hamburger */}
          <div className="md:hidden ">
            {open ? (
              <X onClick={() => setActive(false)} size={28} />
            ) : (
              <Menu onClick={() => setActive(true)} size={28} />
            )}
          </div>
        </div>
      </nav>

      {/* Overlay (dark background) */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setActive(false)}
      />

      {/* Sidebar (Right Slide Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <X onClick={() => setActive(false)} className="cursor-pointer" />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 px-6 mt-6 text-gray-700">
          <li onClick={() => setActive(false)}>Home</li>
          <li onClick={() => setActive(false)}>Fashion</li>
          <li onClick={() => setActive(false)}>Electronics</li>
          <li onClick={() => setActive(false)}>Digital Gadgets</li>
        </ul>
      </div>
    </>
  );
}