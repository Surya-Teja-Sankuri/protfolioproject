import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function Fotter() {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-400 p-10 flex flex-col gap-3 justify-center items-center">
      <p className="font-bold">Connect with me : </p>
      <div className="flex gap-3 text-2xl">
        <a
          href="https://www.linkedin.com/in/surya-teja-sankuri-146319244/"
          target="_blank"
        >
          <BsTwitter />
        </a>
        <a href="https://twitter.com/SankuriTeja" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="mailto:suryatejasankuri@gmail.com" target="_blank">
          <MdEmail />
        </a>
      </div>
    </div>
  );
}

export default Fotter;
