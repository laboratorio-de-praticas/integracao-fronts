import React from "react";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

function Imgs({ src, nome, qr }) {
  return (
    <div className=" h-[55vh] min-h-[450px] relative w-full mx-auto">
      <Image src={src} alt="Foto do Aluno" fill className="object-cover" />
      <div className="flex justify-between column p-4 align-center absolute bottom-0 left-0 right-0 items-center bg-gradient-to-t from-black to-transparent"> 
        <p 
          className="w-full justify-center flex font-(family-name:--font-roboto-slab) text-center
           break-words whitespace-normal m-0 text-white text-[20px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)] 3xl:text-[3.2rem]"
        >
          {nome}
        </p>
        <div className="bg-white p-1">
        <QRCodeCanvas
          value={qr}
          className="border-2 border-white !w-[98px] !h-[98px] 3xl:!w-[200px] 3xl:!h-[200px]"
        />
        </div>
      </div>
  </div>
  );
}

export default Imgs;
