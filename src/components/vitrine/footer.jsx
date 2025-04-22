import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-gray-200 dark:bg-black w-full">
      <div className="container mx-auto">
        <div className="w-[220px] h-[110px] 3xl:w-[580px] 3xl:h-[200px] relative mx-auto">
          <Image
            src="/logo_sp.svg"
            alt="são paulo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
