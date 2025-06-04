"use client";
import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logoWA from "@/public/img/contact/whatsapp.png"

function Button() {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const overlay1Ref = useRef(null);
    const overlay2Ref = useRef(null);

  useEffect(() => {
    gsap.set(overlay1Ref.current, { yPercent: 100 });
  }, []);

  const handleMouseEnter = () => {
    gsap.set(overlay1Ref.current, {yPercent:100})
    gsap.to(overlay1Ref.current, {yPercent: 0, duration: 0.3, ease: "power3.out"});
    gsap.to(overlay2Ref.current, {yPercent: 100, duration: 0.3, ease: "power3.inOut"});
  };

  const handleMouseLeave = () => {
    gsap.set(overlay2Ref.current, {yPercent:0})
    gsap.to(overlay1Ref.current, {yPercent: -100, duration: 0.3, ease: "power3.inOut"});
    gsap.to(overlay2Ref.current, {yPercent: 0, duration: 0.3, ease: "power3.out"}); 
  };

  return (
    <div className="w-[38rem] h-16 flex outline-1 outline-[#A6BFF6] hover:outline-[#305ec2]" >
        <div className="w-16 h-full bg-transparent flex justify-center items-center">
            <Image src={logoWA} alt="logoWA" width={40} height={40}></Image>
        </div>
        <Link href="/" ref={linkRef} className="bg-[#A6BFF6] relative overflow-hidden select-none w-full h-full flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <span ref={overlay1Ref} className="absolute text-xl w-full h-full z-[1] top-0 left-0 pointer-events-none bg-[#305ec2] flex justify-center items-center">Order Now</span>
          <span ref={ overlay2Ref} className="relative z-[0] bg-[#77a2fd]  text-xl w-full h-full flex justify-center items-center">Order Now</span>
        </Link>
    </div>
  );
}

export default Button;
