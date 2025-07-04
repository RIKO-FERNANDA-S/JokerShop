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
      <div className="text-amber-100 w-[56%] flex flex-col h-full justify-center leading-16 mx-14">
        <div className="bg-gradient-to-r from-[#df4df8] to-white bg-clip-text text-transparent">
          <h1
            className={`text-[3.2rem] ${poppins1.className} leading-[4.5rem]`}
          >
            Nikmati Akses ke 90+ Aplikasi Premium Mulai dari Rp1.500/Bulan Saja.
          </h1>
        </div>

        <p className={`${poppins2.className} font-extralight`}>
          Pilih, pakai, dan nikmati kemudahan tanpa batas untuk mendukung
          aktivitas harianmu.
        </p>

        {/* <Link href="https://wa.me/6285646034133?text=Hallo%20min%20saya%20mau%20dong%20langganan%20aplikasi%20premiumnyaa..." className={`${poppins2.className} bg-[#6E2D9F] px-20 w-max py-1 h-max rounded-2xl shadow-[3px_3px_#A6BFF6] hover:translate-1 transition-all hover:shadow-none`}>
          <h1
            className=""
          >
            Yuk Mulai Langganan Aplikasi Premium
          </h1>
        </Link> */}

        <Button/>
      </div>

      <div className="w-full h-20 bg-linear-to-b from-[#4a5cc2cc] mask-t-from-1 to-[#0B0020] flex absolute z-10 -bottom-30"></div>


    </main>
  );
}

export default Hero;
