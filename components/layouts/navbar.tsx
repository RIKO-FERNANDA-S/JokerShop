"use client";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "@/public/img/logo/2.png";
import { Poppins } from "next/font/google";
import flagIDN from "@/public/img/language/idn.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Navbar() {
  const [Oscroll, setScroll] = useState(false);
  const [Active, setActive] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)){
            setActive(false)
        }
    }

    document.addEventListener('mousedown', handler)
    return() => {
        document.removeEventListener('mousedown', handler)
    }
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="fixed w-full z-20">
      <div
        className={`w-full  flex z-10 px-6 min-md:px-20 py-5 justify-between items-center absolute transition-all ease-in ${
          Oscroll
            ? "bg-[#4a5cc241] backdrop-blur-[2px] h-20"
            : "bg-transparent h-32"
        }`}
      >
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-28 min-md:w-36 h-auto"
          ></Image>
        </div>

        <div
          className={`${poppins.className} text-white hidden gap-14 min-md:flex`}
        >
          <Link href="#" className="text-lg">
            Beranda
          </Link>
          <Link href="#tentang" className="text-lg">
            Tentang
          </Link>
          <Link href="#katalog" className="text-lg">
            Katalog
          </Link>
          <Link href="#faq" className="text-lg">
            FAQ
          </Link>
        </div>

        <button className="hidden min-md:flex bg-[#E0B7FF] h-max px-4 py-2 items-center gap-3 rounded-full cursor-pointer hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out ">
          <h1
            className={`${poppins.className} text-[#200041] text-md font-semibold`}
          >
            IDN
          </h1>
          <Image src={flagIDN} alt="indonesia" className="w-6"></Image>
          {/* <Image src={flagUK} alt='United-kindom'></Image> */}
        </button>
        <div className="max-md:flex hidden">
            <FontAwesomeIcon
          onClick={() => setActive(!Active)}
          icon={faBars}
          color="white"
          className={`cursor-pointer fa-xl {!Active ? "max-md:flex" : "max-md:hidden"}`}
        />
        </div>
      </div>
      <section className={`max-md:flex ${poppins.className} hidden w-full justify-end {Active} `}>
        
        {Active && (
          <div ref={menuRef} className="bg-[#4a5cc2c7] backdrop-blur-[2px] w-full h-max z-20 fixed p-5 flex ">
            <div className="absolute flex w-max ">
            <FontAwesomeIcon icon={faXmark} className="fa-xl" color="white" onClick={() => setActive(!Active)}/>
            </div>
                <div className="flex relative text-white flex-col gap-8 my-7 w-full text-center items-center">
                    <Link href="#" className="text-shadow-md text-xl border-b-2 border-[#ffffff8f] w-max pb-3 px-32 text-shadow-[#ffff]">Home</Link>
                    <Link href="#tentang" className="text-shadow-md text-xl border-b-2 border-[#ffffff8f] w-max pb-3 px-32 text-shadow-[#ffff]">Tentang</Link>
                    <Link href="#katalog" className="text-shadow-md text-xl border-b-2 border-[#ffffff8f] w-max pb-3 px-32 text-shadow-[#ffff]">Katalog</Link>
                    <Link href="#faq" className="text-shadow-md text-xl border-b-2 border-[#ffffff8f] w-max pb-3 px-32 text-shadow-[#ffff]">FAQ</Link>
                </div>
          </div>
        )}
      </section>
      
    </main>
  );
}

export default Navbar;
