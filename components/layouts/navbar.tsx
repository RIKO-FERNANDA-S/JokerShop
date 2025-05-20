"use client"
import React from 'react'
import Image from 'next/image'
import logo from "@/public/img/logo/2.png"
import { Poppins } from 'next/font/google'
import flagIDN from "@/public/img/language/idn.png"
import flagUK from "@/public/img/language/uk.png"
import Link from 'next/link'
import { useState, useEffect } from 'react'

const poppins = Poppins({
    subsets: ["latin"],
    display: 'swap',
    weight: '400'
})

function Navbar() {

    const [Oscroll, setScroll] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 15;
            setScroll(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


  return (
    <main className='fixed w-full z-20'>   
    <div className={`w-full  flex z-10 px-20 py-5 justify-between items-center absolute transition-all ease-in ${ Oscroll ? 'bg-[#4a5cc241] backdrop-blur-[2px] h-20' : 'bg-transparent h-32'}`}>
        <div>
            <Image src={logo} alt='logo' className='w-36 h-auto'></Image>
        </div>

        <div className={`${poppins.className} text-white flex gap-14`}>
            <Link href="#" className='text-lg'>Beranda</Link>
            <Link href="#tentang" className='text-lg'>Tentang</Link>
            <Link href="#katalog" className='text-lg'>Katalog</Link>
            <Link href="" className='text-lg'>Informasi</Link>
        </div>

        <button className='flex bg-[#E0B7FF] h-max px-4 py-2 items-center gap-3 rounded-full cursor-pointer hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out '>
            <h1 className={`${poppins.className} text-[#200041] text-md font-semibold`}>IDN</h1>
            <Image src={flagIDN} alt='indonesia' className='w-6'></Image>
            {/* <Image src={flagUK} alt='United-kindom'></Image> */}
        </button>


    </div>
    </main>
  )
}

export default Navbar