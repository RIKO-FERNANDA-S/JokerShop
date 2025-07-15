"use client";
import React, { useState, useRef, useEffect } from "react";
import TextFaq from "../UI/textFaq";
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import Image from "next/image";
import Img from "../../public/img/part/astro.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

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
      "Waaahhh mantap nieh maniees, ada banget coba lihat di katalog atau sekalian langsung tanya ke admin cuuy.",
  },
  {
    id: 4,
    pertanyaan: "Bang, langganan apa yang 1.500 rupiah itu?",
    jawaban: "Harganya 1.500 rupiah itu untuk YouTube Premium 1 bulan.",
  },
];

function Informasi() {
  const [activeQ, setActiveQ] = useState<number | null>(null);
  
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeQ === null) return;

    const index = questions.findIndex((q) => q.id === activeQ);
    const el = answerRefs.current[index];

    if (activeQ) {
      gsap.fromTo(el, {opacity: 0.6, y:-20},{ opacity: 1, y: -9, duration: 0.5, ease: "power2.inOut" });
    }else{
      gsap.to(el, {opacity: 0, y:10, ease: "power2.out", duration: 0.5})
    }

  }, [activeQ]);
  
  const handleToggle = (id: number) => {
    setActiveQ(activeQ === id ? null : id);
  }


  return (
    <main
      id="faq"
      className={`${poppins.className} h-max gap-6 w-full flex flex-col justify-start`}
    >
      <section className="px-16 flex justify-center w-full h-32 max-md:h-max">
        <h1 className="relative z-[3] text-center leading-13 flex text-7xl max-md:text-[2rem]  text-[#f2f5fd] font-bold">
          Frequently Asked Questions
        </h1>
        <TextFaq />
      </section>

      <section className=" text-white min-md:flex justify-between items-center w-full h-max mb-16 mt-5">
        <div className="flex flex-col min-md:gap-2 max-md:h-max w-1/2 max-md:w-full h-full max-md:items-start min-md:flex min-md:flex-col min-md:justify-around ml-16 max-md:ml-1 pb-10">
          {questions.map((q, index) => (
            <div  key={q.id} className="min-md:flex flex flex-col w-full max-md:w-full max-md:justify-center max-md:items-center h-max text-start ">
              <button
              
                className={`z-[2] flex bg-[#cd8dff] max-md:my-2 h-max text-start justify-between cursor-pointer items-center w-xl max-md:w-xs px-10 max-md:px-4 max-md:text-xs py-6 border-l-[10px] border-[#4a5cc2] shadow-2xl/30 shadow-white ${
                  activeQ === q.id ? "rounded-t-xl " : "rounded-xl"
                }`}
                onClick={() => handleToggle(q.id)}
              >
                {q.pertanyaan}
                {activeQ === q.id ? (
                  <FontAwesomeIcon icon={faMinus} className="ml-2"  />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="ml-2"/>
                )}
              </button>

              {activeQ === q.id && (
                <div
                  ref={(el) => {
                    answerRefs.current[index] = el;
                  }}
                  className="-z-10 flex w-xl max-md:w-xs max-md:text-xs max-md:pl-2 pl-5 py-5 bg-[#4a5cc2] rounded-b-xl"
                >
                  {q.jawaban}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex max-md:hidden z-10 justify-center w-1/2 h-full ">
          <Image className="w-[27em] h-full" src={Img} alt="astronout" />
        </div>
      </section>
    </main>
  );
}

export default Informasi;
