import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navlinks } from "@/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
      } bg-gray-900 text-white p-2 ss:p-4 opacity-100 `}
    >
      <div className="flex justify-between items-center mx-5">
        <div className="flex items-center space-x-2">
          <Image className="" src={"/icon.svg"} width="50" height="50"></Image>
          <ul className="hidden xss:flex flex-col">
            <li className="flex-grow text-lg font-bold">
              ROSE NORMANS FOUNDATION
            </li>
            <li className="flex-grow font-medium text-sm tracking-widest">
              MENTAL HEALTH ORGANISATION
            </li>
          </ul>
          <ul className="xss:hidden flex flex-col">
            <li className=" text-lg font-bold">ROSE NORMANS</li>
            <li className=" text-lg font-bold">FOUNDATION</li>
          </ul>
        </div>
        <ul className="mid:flex space-x-3 md:space-x-10 hidden font-medium items-center">
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
        {showMenu && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
            <div
              className={`${
                showMenu ? "slide-in-right" : "slide-out-right"
              } flex flex-col pt-2 pb-5 px-4 bg-gray-800 absolute top-0 right-0 mb-2 min-w-[200px] z-10 `}
            >
              <button
                onClick={() => setShowMenu(false)}
                className="flex justify-start text-white text-2xl"
              >
                <AiOutlineClose />
              </button>
              <ul className=" space-y-4 flex-1 items-center flex-col pt-5 justify-end ">
                {navlinks.map((navlink) => {
                  return (
                    <li key={navlink.id} className="text-dimWhite text-lg hover:text-white">
                      <Link href="#">{navlink.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
        <button
          onClick={() => setShowMenu(true)}
          className="mid:hidden text-3xl hover:bg-gray-800 rounded-full p-1"
        >
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
