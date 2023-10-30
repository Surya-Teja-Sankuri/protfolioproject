import React from "react";

function MyInfo() {
  return (
    <div className="my-10 flex flex-col gap-5 justify-center items-center">
      <h1 className=" text-5xl font-bold">Surya Teja</h1>
      <p>Software Engineer Enthusiast</p>
      <p>
        I am <span className=" font-bold text-red-400">Surya Teja</span>, an
        undergraduate student currently embarking on a transformative academic
        journey at the esteemed{" "}
        <span className="font-bold text-red-400">
          University College of Engineering, Osmania University
        </span>
        . As a fervent scholar with an insatiable curiosity for the
        ever-evolving world of technology, I am passionately pursuing my
        bachelor's degree in an endeavor to unravel the limitless possibilities
        of the digital realm.
      </p>
      <p className="text-gray-300">
        In addition to my academic pursuits, I hold a profound belief that "
        <span className="font-bold text-white">
          Life is a journey, enjoy every ride.
        </span>
        " This adage has become my daily motivation, serving as a reminder to
        relish every moment and experience life to its fullest.
      </p>
    </div>
  );
}

export default MyInfo;
