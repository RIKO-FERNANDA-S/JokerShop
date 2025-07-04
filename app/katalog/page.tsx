"use client"
import React from 'react'
import TextKatalog from '@/components/UI/textKatalog'
import ProductKatalog from '@/components/UI/productKatalog'


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