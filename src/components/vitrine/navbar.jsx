import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full menu-container bg-red-700 border-gray-200 dark:bg-red-700 py-4">
        <div className="menu-logo-4k justify-center relative w-[516px] h-[100%] ml-8">
          <Image 
            src="/logo_menu.svg" 
            alt="logo" 
            fill
            className="object-fill !w-auto !relative  min-h-[50px]"
          />
        </div>
    </nav>
  );
}
