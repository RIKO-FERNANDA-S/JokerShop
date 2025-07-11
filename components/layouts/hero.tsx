"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Button from "../UI/button";

const poppins1 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const poppins2 = Poppins({
  subsets: ["latin"],
  weight: "400",
});

function Hero() {
  return (
    <main
      className="bg-cover bg-no-repeat h-[114vh] w-full bg-center flex flex-col items-start "
      style={{ backgroundImage: "url('/img/bg/ter1.png')" }}
    >
      <div className="text-amber-100 w-full min-md:w-[56%] flex flex-col h-full justify-center leading-16 max-md:px-10 min-md:mx-14">
        <div className="bg-gradient-to-r from-[#df4df8] to-white bg-clip-text text-transparent">
          <h1
            className={`text-3xl min-md:text-[3.2rem] ${poppins1.className} min-md:leading-[4.5rem]`}
          >
            Nikmati Akses ke 90+ Aplikasi Premium Mulai dari Rp1.500/Bulan Saja.
          </h1>
        </div>

        <p className={`${poppins2.className} w-full max-md:leading-7 font-extralight font-white`}>
          Pilih, pakai, dan nikmati kemudahan tanpa batas untuk mendukung
          aktivitas harianmu.
        </p>

        <Button/>
      </div>

      <div className="w-full h-20 bg-linear-to-b from-[#4a5cc2cc] mask-t-from-1 to-[#0B0020] flex absolute z-10 -bottom-30"></div>


    </main>
  );
}

export default Hero;
