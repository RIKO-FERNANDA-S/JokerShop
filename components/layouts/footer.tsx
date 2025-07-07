"use client"
import React from 'react';
import Instagram from "../../public/img/logo/instagram-brands (1).svg"
import Whatsapp from "../../public/img/logo/whatsapp-brands-solid.svg"
import Facebook from "../../public/img/logo/facebook-brands (1).svg"
import Tiktok from "../../public/img/logo/tiktok-brands (1).svg"
import Image from 'next/image';
import logo from '../../public/img/logo/3.png'
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: "300"
})


function footer() {
  return (
    <main className='w-full h-max text-white'>
        <section className='w-full h-max py-5 flex justify-center items-center bg-[#7a1ea8c5]'>
            <Image src={logo} alt='Logo Joker Shop' width={200}/>
        </section>
        <section className={`${poppins.className} w-full h-max py-4 px-16 flex justify-between bg-[#4b1566]`}>
            <h2>Joker Store © COPYRIGHT 2025. ALL RIGHTS RESERVED. Create By RIKO FERNANDA SAPUTRA</h2>
            
            <article className='flex flex-wrap gap-5 items-center'>
                <Link href="https://www.instagram.com/storegame_joker?utm_source=ig_web_button_share_sheet&igsh=MWd1cDFhOXY2aXF1Nw==">
                <Image src={Instagram} alt='LOGO SOCIAL MEDIA' width={28} color='white'/>
                </Link>
                <Link href="https://wa.me/62882009466583">
                <Image src={Whatsapp} alt='LOGO SOCIAL MEDIA' width={28}/>
                </Link>
                <Link href="https://www.facebook.com/storegame.jokerr">
                <Image src={Facebook} alt='LOGO SOCIAL MEDIA' width={28}/>
                </Link>
                <Link href="https://www.tiktok.com/@storegame_joker">
                <Image src={Tiktok} alt='LOGO SOCIAL MEDIA' width={25}/>
                </Link>
            </article>
        </section>
    </main>
  )
}

export default footer