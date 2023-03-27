import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 mx-9 my-20">
      <div className="hidden mid:col-span-1 mid:flex flex-col justify-center gap-4">
        <h1 className="font-graphikBold text-5xl">
          Empowering Communities for Mental Health and Breaking the Stigma
        </h1>
        <div className="">
          <button className="border border-black hover:bg-black hover:text-white rounded-full px-3 py-2 text-xl font-bold">
            OUR PROJECTS
          </button>
        </div>
      </div>
      <div className="col-span-2 mid:col-span-1  ">
        <div className="relative w-full h-[300px] mid:h-[400px] object-cover">
          <div className="absolute bg-gradient-to-t mid:bg-gradient-to-r from-white z-10 w-full h-full"></div>
          <Image
            src="/projects.jpg"
            className="absolute"
            style={{
              objectFit: "cover",
            }}
            fill
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
            alt="Article cover image"
          />
        </div>
      </div>
      <div className="col-span-2 mid:hidden flex flex-col justify-center gap-4 border-b border-black pb-5">
        {" "}
        <h1 className="font-graphikBold text-5xl">
          Empowering Communities for Mental Health and Breaking the Stigma
        </h1>
        <div className="">
          <button className="border border-black rounded-full px-3 py-2 text-xl font-bold">
            OUR PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
