"use client";
import React from "react";
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Slider
import "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Image
import Image from "next/image";
import Img1 from "@/public/img/produk/premium/apk (1).jpg";
import Img2 from "@/public/img/produk/premium/apk (2).jpg";
import Img3 from "@/public/img/produk/premium/apk (3).jpg";
import Img4 from "@/public/img/produk/premium/apk (4).jpg";
import Img5 from "@/public/img/produk/premium/apk (5).jpg";
import Img6 from "@/public/img/produk/premium/apk (6).jpg";
import Img7 from "@/public/img/produk/premium/apk (7).jpg";
import Img8 from "@/public/img/produk/premium/apk (8).jpg";
import Img9 from "@/public/img/produk/premium/apk (9).jpg";
import Img10 from"@/public/img/produk/premium/apk (10).jpg";
import Img11 from"@/public/img/produk/premium/apk (11).jpg";
import Img12 from"@/public/img/produk/premium/apk (12).jpg";

// Font
import TextKatalog from "../UI/textKatalog";
import { Poppins } from "next/font/google";
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
    
    <div>
      <TextKatalog/>
    </div>

      <div className="w-full flex flex-col mt-8">
        <div className="w-full flex justify-end pr-10">
        <Link href="/katalog" className="text-white">Lihat Lebih <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color:"white"}} className="ml-3" /></Link>
        </div>
      <div className="mt-5 w-full flex gap-1">
        <Splide
          options={{
            type: "loop",
            perPage: 5,
            gap: ".1rem",
            autoplay: true,
            interval:3000
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
