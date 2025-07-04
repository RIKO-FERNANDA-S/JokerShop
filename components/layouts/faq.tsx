"use client";
import React from "react";
import TextFaq from "../UI/textFaq";
import { useState, useEffect, useRef } from "react";
import { Poppins } from "next/font/google";

// UNTUK ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// UNTUK ANIMASI
import gsap from "gsap";



// FONT POPPINS DARI GOOGLE FONT
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});


// DATA PERTANYAAN DAN JAWABAN
const questions = [
  {
    id: 1,
    pertanyaan: "Bang, apakah ada aplikasi lain selain dikatalog?",
    jawaban:
      "Ada doong, coba saja hubungi admin dan tanyakan aplikasi mu untuk mengetahui lebih detailnya.",
  },
  {
    id: 2,
    pertanyaan: "Bang, buat lihat harganya terjangkau tidak?",
    jawaban:
      "Good question, harganya jelas sangat sangat terjangkau buat kantong pelajar yang membutuhkan app premium.",
  },
  {
    id: 3,
    pertanyaan: "Bang, apakah ada aplikasi edukasi untuk belajar?",
    jawaban:
      "waaahhh mantap nieh maniees, ada banget coba lihat di katalog atau sekalian lasngung tanya ke admin cuuy.   ",
  },
  {
    id: 4,
    pertanyaan: "Bang, laganan apa yang 1.500 rupiah itu?",
    jawaban: "Harganya 1.500 rupiah itu untuk youtube premium 1 bulan.",
  },
];

function Informasi() {
  const [activeQ, setActiveQ] = useState<number | null>(null);
  
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(boxRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
  }, [])

  return (
    <main
      id="faq"
      className={`${poppins.className} h-screen w-full flex flex-col justify-start`}
    >
      <section className="px-16 flex justify-center w-full h-32">
        <TextFaq />
        <h1 className="relative z-[3] flex text-7xl mt-2 text-[#f2f5fd] font-bold">
          Frequently Asked Questions
        </h1>
      </section>

      <section className="gap-7 text-white flex justify-start items-start w-full h-[27rem] mt-10 px-10">
        <div className="w-3/4 flex flex-col gap-5">
          {questions.map((q) => (
            <div key={q.id} className="flex flex-col text-start w-full">
              <button
                className={` bg-[#cd8dff] flex justify-between cursor-pointer items-center w-3xl px-10 py-6 border-l-[10px] border-[#4a5cc2]  shadow-2xl/30 shadow-white ${activeQ === q.id ? "rounded-t-xl" : "rounded-xl"}`}
                onClick={() => setActiveQ(activeQ === q.id ? null : q.id)}
              >
                {q.pertanyaan}
                {activeQ === q.id ? (
                  <FontAwesomeIcon icon={faMinus} />
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </button>
              {activeQ === q.id && (
                <div  className="w-3xl pl-5 py-5 bg-[#4a5cc2] rounded-b-xl">
                  <p ref={boxRef} className="">{q.jawaban}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div ref={boxRef} className="relative mt-8 w-max h-24 bg-[#742bacda]">
          <p>adada </p>
        </div>
      </section>
    </main>
  );
}

export default Informasi;
