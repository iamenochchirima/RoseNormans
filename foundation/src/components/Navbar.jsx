import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navlinks } from "@/constants";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
      } bg-gray-900 text-white p-4 opacity-100 `}
    >
      <div className="flex justify-between items-center mx-5">
        <div className="flex items-center space-x-2">
          <Image className="" src={"/icon.svg"} width="50" height="50"></Image>
          <ul className="flex flex-col">
            <li className="flex-grow text-lg font-bold">
              ROSE NORMANS FOUNDATION
            </li>
            <li className="flex-grow font-medium text-sm tracking-widest">
              MENTAL HEALTH ORGANISATION
            </li>
          </ul>
        </div>
        <ul className="flex space-x-10 font-medium items-center">
          {navlinks.map((navlink) => {
            return (
              <li key={navlink.id} className="">
                <Link href="#">{navlink.name}</Link>
              </li>
            );
          })}
          <li className="bg-blue-500 rounded-2xl py-1 px-4">
            <Link href={"#"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
