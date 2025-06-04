"use client"
import React from 'react'
import Image from 'next/image'
import Laptop from '@/public/img/part/laptop.png'
import CEO from '@/public/img/co-founder.jpg'
import { Poppins } from 'next/font/google'


const poppins = Poppins({subsets: ['latin'], weight: '200'})

function Tentang() {
  return (
    <main className={`w-full h-screen flex items-center justify-center ${poppins.className} px-14`} id='tentang'>
        <div className='w-1/2' data-aos="fade-right">
          <Image src={Laptop} alt='laptop'></Image>
        </div>
        <div className='w-1/2 text-white flex flex-col justify-center'>
        <h1 data-aos="fade-up" className='text-4xl font-bold'>Akses Premium Tanpa Ribet</h1>
        <p data-aos="fade-up" className='text-lg w-[90%] mt-4'>Kami memberikan kemudahan berlangganan aplikasi premium favorit Anda dengan harga lebih terjangkau. Nikmati fitur lengkap, pembaruan rutin, dan dukungan eksklusif—tanpa biaya tersembunyi atau kontrak rumit.</p>
        <div data-aos="fade-up" className='flex mt-10 gap-5'>
          <Image src={CEO} alt='yoga' className='w-24 rounded-full border-2 border-white hover:shadow-[0px_0px_30px_#712398] transition-all ease-in'></Image>
          <div className='flex flex-col justify-center gap-2'>
            <p className='text-sm'>CO Founder</p>
            <h1 className='text-2xl font-semibold'>Prayoga Putra Pratama</h1>
          </div>
        </div>
        </div>
    </main>
  )
}

export default Tentang