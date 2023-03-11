import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="flex mx-5 p-4 ">
        <div className="flex justify-center items-center flex-col text-white w-1/2 space-y-10">
          <p className="text-6xl text-center font-bold text-red-100" >
            Every mind is a special mind, all we need is a changed perspective.
          </p>
          <p className="text-xl font-thin text-center tracking-widest">
            ROSE NORMANS EMBRACING, EDUCATING, INSPIRING
          </p>
          <button className="bg-blue-500 rounded-2xl py-2 px-4">Our Mission</button>
        </div>
        <div className="w-1/2">
        <Image src={"/Rose.jpeg"} height="500" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
