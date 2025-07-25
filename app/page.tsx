"use client"
import 'aos/dist/aos.css'
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('@/components/layouts/navbar'), {ssr:false});
const HeroSec = dynamic(() => import('@/components/layouts/hero'), {ssr:false});
const Tentang = dynamic(() => import('@/components/layouts/tentang'), {ssr:false});
const Katalog = dynamic(() => import('@/components/layouts/katalog'), {ssr:false});
const Information = dynamic(() => import('@/components/layouts/faq'), {ssr:false});
const Footer = dynamic(() => import('@/components/layouts/footer'), {ssr:false});

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSec/>
      <Tentang/>
      <Katalog/>
      <Information/>
      <Footer/>
    </main>
  );
}
