"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

import img1 from "@/public/img/produk/premium/apk (1).jpg"
import img2 from "@/public/img/produk/premium/apk (2).jpg"
import img3 from "@/public/img/produk/premium/apk (3).jpg"
import img4 from "@/public/img/produk/premium/apk (4).jpg"
import img5 from "@/public/img/produk/premium/apk (5).jpg"
import img6 from "@/public/img/produk/premium/apk (6).jpg"
import img7 from "@/public/img/produk/premium/apk (7).jpg"
import img8 from "@/public/img/produk/premium/apk (8).jpg"
import img9 from "@/public/img/produk/premium/apk (9).jpg"
import img10 from "@/public/img/produk/premium/apk (10).jpg"
import img11 from "@/public/img/produk/premium/apk (11).jpg"
import img12 from "@/public/img/produk/premium/apk (12).jpg"
import img13 from "@/public/img/produk/premium/apk (13).jpg"
import img14 from "@/public/img/produk/premium/apk (14).jpg"
import img15 from "@/public/img/produk/premium/apk (15).jpg"
import img16 from "@/public/img/produk/premium/apk (16).jpg"
import img17 from "@/public/img/produk/premium/apk (17).jpg"
import img18 from "@/public/img/produk/premium/apk (18).jpg"
import img19 from "@/public/img/produk/premium/apk (19).jpg"
import img20 from "@/public/img/produk/premium/apk (20).jpg"
import img21 from "@/public/img/produk/premium/apk (21).jpg"
import img22 from "@/public/img/produk/premium/apk (22).jpg"
import img23 from "@/public/img/produk/premium/apk (23).jpg"
import img24 from "@/public/img/produk/premium/apk (24).jpg"
import img25 from "@/public/img/produk/premium/apk (25).jpg"
import img26 from "@/public/img/produk/premium/apk (26).jpg"
import img27 from "@/public/img/produk/premium/apk (27).jpg"
import img28 from "@/public/img/produk/premium/apk (28).jpg"
import img29 from "@/public/img/produk/premium/apk (29).jpg"
import img30 from "@/public/img/produk/premium/apk (30).jpg"
import img31 from "@/public/img/produk/premium/apk (31).jpg"
import img32 from "@/public/img/produk/premium/apk (32).jpg"
import img33 from "@/public/img/produk/premium/apk (33).jpg"
import img34 from "@/public/img/produk/premium/apk (34).jpg"
import img35 from "@/public/img/produk/premium/apk (35).jpg"
import img36 from "@/public/img/produk/premium/apk (36).jpg"
import img37 from "@/public/img/produk/premium/apk (37).jpg"
import img38 from "@/public/img/produk/premium/apk (38).jpg"
import img39 from "@/public/img/produk/premium/apk (39).jpg"
import img40 from "@/public/img/produk/premium/apk (40).jpg"
import img41 from "@/public/img/produk/premium/apk (41).jpg"
import img42 from "@/public/img/produk/premium/apk (42).jpg"
import img43 from "@/public/img/produk/premium/apk (43).jpg"
import img44 from "@/public/img/produk/premium/apk (44).jpg"
import img45 from "@/public/img/produk/premium/apk (45).jpg"
import img46 from "@/public/img/produk/premium/apk (46).jpg"
import img47 from "@/public/img/produk/premium/apk (47).jpg"
import img48 from "@/public/img/produk/premium/apk (48).jpg"
import img49 from "@/public/img/produk/premium/apk (49).jpg"
import img50 from "@/public/img/produk/premium/apk (50).jpg"
import img51 from "@/public/img/produk/premium/apk (51).jpg"
import img52 from "@/public/img/produk/premium/apk (52).jpg"
import img53 from "@/public/img/produk/premium/apk (53).jpg"
import img54 from "@/public/img/produk/premium/apk (54).jpg"
import img55 from "@/public/img/produk/premium/apk (55).jpg"
import img56 from "@/public/img/produk/premium/apk (56).jpg"
import img57 from "@/public/img/produk/premium/apk (57).jpg"
import img58 from "@/public/img/produk/premium/apk (58).jpg"
import img59 from "@/public/img/produk/premium/apk (59).jpg"
import img60 from "@/public/img/produk/premium/apk (60).jpg"
import img61 from "@/public/img/produk/premium/apk (61).jpg"
import img62 from "@/public/img/produk/premium/apk (62).jpg"
import img63 from "@/public/img/produk/premium/apk (63).jpg"
import img64 from "@/public/img/produk/premium/apk (64).jpg"
import img65 from "@/public/img/produk/premium/apk (65).jpg"
import img66 from "@/public/img/produk/premium/apk (66).jpg"
import img67 from "@/public/img/produk/premium/apk (67).jpg"
import img68 from "@/public/img/produk/premium/apk (68).jpg"
import img69 from "@/public/img/produk/premium/apk (69).jpg"
import img70 from "@/public/img/produk/premium/apk (70).jpg"
import img71 from "@/public/img/produk/premium/apk (71).jpg"
import img72 from "@/public/img/produk/premium/apk (72).jpg"
import img73 from "@/public/img/produk/premium/apk (73).jpg"
import img74 from "@/public/img/produk/premium/apk (74).jpg"
import img75 from "@/public/img/produk/premium/apk (75).jpg"
import img76 from "@/public/img/produk/premium/apk (76).jpg"
import img77 from "@/public/img/produk/premium/apk (77).jpg"
import img78 from "@/public/img/produk/premium/apk (78).jpg"
import img79 from "@/public/img/produk/premium/apk (79).jpg"
import img80 from "@/public/img/produk/premium/apk (70).jpg"
import img81 from "@/public/img/produk/premium/apk (81).jpg"
import img82 from "@/public/img/produk/premium/apk (82).jpg"
import img83 from "@/public/img/produk/premium/apk (83).jpg"
import img84 from "@/public/img/produk/premium/apk (84).jpg"
import img85 from "@/public/img/produk/premium/apk (85).jpg"
import img86 from "@/public/img/produk/premium/apk (86).jpg"
import img87 from "@/public/img/produk/premium/apk (87).jpg"
import img88 from "@/public/img/produk/premium/apk (88).jpg"
import img89 from "@/public/img/produk/premium/apk (89).jpg"
import img90 from "@/public/img/produk/premium/apk (90).jpg"
import { Poppins } from 'next/font/google'

const poppins2 = Poppins({
  subsets: ["latin"],
  weight: "400",
});


function ProductKatalog() {


  const [viewMore, setViewMore] = useState(false)
  
  const toggle = () => {
    setViewMore(!viewMore);
  };



  return (
    <main className='w-full pt-20 flex flex-col gap-7 max-md:pt-5 '>
      <div className='flex flex-wrap justify-center gap-7 px-2'>
      <Image src={img1} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img2} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img3} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img4} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img5} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img6} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img7} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img8} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img9} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img10} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img11} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img12} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img13} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img14} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img15} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img16} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img17} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img18} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img19} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img20} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img21} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img22} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img23} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img24} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img25} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img26} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img27} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img28} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img29} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img30} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img31} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img32} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img33} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img34} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img35} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img36} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img37} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img38} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img39} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img40} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img41} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img42} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img43} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img44} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img45} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      </div>

      {viewMore ? 
      <div className='w-full flex flex-wrap justify-center gap-7 px-2' >
      <Image src={img46} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img47} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img48} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img49} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img50} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img51} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img52} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img53} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img54} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img55} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img56} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img57} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img58} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img59} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img60} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img61} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img62} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img63} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img64} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img65} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img66} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img67} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img68} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img69} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img70} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img71} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img72} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img73} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img74} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img75} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img76} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img77} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img78} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img79} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img80} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img81} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img82} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img83} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img84} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img85} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img86} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img87} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img88} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img89} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      <Image src={img90} alt='img' data-aos='flip-left' className='w-60 border-2 border-white hover:shadow-[0_0_25px] hover:shadow-[#712398] transition-all ease-in-out hover:scale-105 max-md:w-24'></Image>
      </div>
      : <p></p> }
      
      <div className='w-full flex justify-center py-10'>
      <button onClick={toggle} className={`text-white py-2 ${poppins2.className} bg-[#6E2D9F] cursor-pointer px-20 w-max py-1 h-max rounded-2xl shadow-[3px_3px_#A6BFF6] hover:translate-1 transition-all hover:shadow-none`}>
        {!viewMore ? 'Lihat Banyak' : 'Lihat Sedikit'}
      </button>
      </div>
    </main>

  )
}

export default ProductKatalog