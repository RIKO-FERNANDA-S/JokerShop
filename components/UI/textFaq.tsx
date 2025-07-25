"use client";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function textFaq() {
  return (
    <main className="w-full absolute flex justify-center h-max">
      <h1
        className={`${poppins.className} text-white max-md:leading-16 flex items-center justify-center flex-col text-[5.5rem] max-md:text-[2.5rem] font-bold bg-gradient-to-b from-[#ffffff69] from-[1%] to-[#99999900] h-max w-max text-outline-gradient text-center`}
      >
        Frequently Asked Questions
      </h1>
    </main>
  );
}

export default textFaq;
