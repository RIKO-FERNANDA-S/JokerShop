"use client"
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('@/components/layouts/navbar'), {ssr:false})
const HeroSec = dynamic(() => import('@/components/layouts/hero'), {ssr:false})

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSec/>
    </main>
  );
}
