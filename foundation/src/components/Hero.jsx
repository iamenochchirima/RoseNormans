import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="grid grid-cols-1 md:grid-cols-4 mx-5 p-4">
        <div className="col-span-1 ss:col-span-2 flex justify-center items-center flex-col text-white space-y-10">
          <p className="ss:text-6xl text-5xl  text-center font-bold text-red-100" >
            Every mind is a special mind, all we need is a changed perspective.
          </p>
          <p className="text-xl font-thin text-center tracking-widest">
            ROSE NORMANS EMBRACING, EDUCATING, INSPIRING
          </p>
          <button className="bg-blue-500 rounded-2xl py-2 px-4">Our Mission</button>
        </div>
        <div className="hidden md:flex ss:justify-center col-span-1 ss:col-span-2 ">
        <Image src={"/Rose.jpeg"} height="500" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
