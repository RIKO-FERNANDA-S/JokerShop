"use client";
import React from "react";
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// FONT
import { Poppins } from "next/font/google";

// Slider
import "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Image
import Image from "next/image";
import Img1 from "@/public/img/produk/INSTAGRAM _20250424_235112_0000.jpg";
import Img2 from "@/public/img/produk/INSTAGRAM _20250424_235450_0000.jpg";
import Img3 from "@/public/img/produk/INSTAGRAM _20250424_235652_0000.jpg";
import Img4 from "@/public/img/produk/INSTAGRAM _20250424_235815_0000.jpg";
import Img5 from "@/public/img/produk/INSTAGRAM _20250424_235937_0000.jpg";
import Img6 from "@/public/img/produk/INSTAGRAM _20250425_000023_0000.jpg";
import Img7 from "@/public/img/produk/INSTAGRAM _20250425_000402_0000.jpg";
import Img8 from "@/public/img/produk/INSTAGRAM _20250425_000619_0000.jpg";
import Img9 from "@/public/img/produk/INSTAGRAM _20250425_000844_0000.jpg";
import Img10 from "@/public/img/produk/INSTAGRAM _20250425_001215_0000.jpg";
import Img11 from "@/public/img/produk/INSTAGRAM _20250425_001406_0000.jpg";
import Img12 from "@/public/img/produk/INSTAGRAM _20250425_001651_0000.jpg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
});

function Katalog() {
  return (
    <main
      className={`w-full h-screen flex flex-col items-center justify-start ${poppins.className}`}
      id="katalog"
    >
      <h1 className=" text-9xl font-bold bg-gradient-to-b from-[#FFFFFF] from-[1%] to-[#99999900] h-max w-max text-outline-gradient">
        KATALOG
      </h1>

      <div className="w-full flex flex-col mt-8">
        <div className="w-full flex justify-end pr-10">
        <Link href="/" className="text-white">View More <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color:"white"}} className="ml-3" /></Link>
        </div>
      <div className="mt-5 w-full flex gap-1">
        <Splide
          options={{
            type: "loop",
            perPage: 5,
            gap: ".1rem",
            autoplay: true,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img1} className="w-[90%] " alt="Image 1" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img2} className="w-[90%] " alt="Image 2" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img3} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img4} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img5} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img6} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img7} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img8} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img9} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img10} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img11} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
          <SplideSlide className="flex justify-center items-center">
            <Image src={Img12} className="w-[90%] " alt="Image 3" />
          </SplideSlide>
        </Splide>
      </div>
      </div>
    </main>
  );
}

export default Katalog;
