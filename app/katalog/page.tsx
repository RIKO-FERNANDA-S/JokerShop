"use client"
import React from 'react'
import fs from 'fs'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import TextKatalog from '@/components/layouts/UI/textKatalog'
import ProductKatalog from '@/components/layouts/UI/productKatalog'


const Img1 = dynamic(() => import('@/components/layouts/UI/textKatalog'))

function Katalog() {
  return (
    <main className='w-full h-max py-7'>
      <div className='w-full h-max flex flex-col align-center justify-center '>
        <TextKatalog/>  
        <ProductKatalog/>
      </div>
    </main>
  )
}

export default Katalog