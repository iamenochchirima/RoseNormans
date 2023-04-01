import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navlinks } from "@/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 550) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex justify-center items-start ">
      <div
        className={`${scrolled ? "bg-white shadow-md" : " text-white"} ${
          isSticky ? `bg-black opacity-95 duration-500` : `bg-transparent`
        } B fixed w-full z-20 p-2  ss:p-4 opacity-100 max-w-[1500px]`}
      >
        <div className="flex justify-between items-center ss:mx-5">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                className=""
                src={"/icon.svg"}
                alt="Rose normans logo"
                width="50"
                height="50"
              ></Image>
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
          </Link>
          <ul className="mid:flex space-x-3 md:space-x-10 hidden font-medium items-center">
            {navlinks.map((navlink) => {
              return (
                <li key={navlink.id} className="font-bold">
                  <Link href={`${navlink.url}`}>{navlink.name}</Link>
                </li>
              );
            })}
            <li className="text-white font-bold bg-blue-500 rounded-2xl py-1 px-4">
            <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          {showMenu && (
            <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
              <div
                className={`${
                  scrolled ? "bg-white text-black" : "bg-black text-white"
                } flex flex-col pt-2 pb-5 px-4 bg-opacity-100 absolute top-0 right-0 mb-2 w-full min-h-screen z-10 `}
              >
                <button
                  onClick={() => setShowMenu(false)}
                  className="flex justify-start text-2xl"
                >
                  <AiOutlineClose />
                </button>
                <ul className=" space-y-4 flex-1 items-center flex-col pt-5 justify-end ">
                  {navlinks.map((navlink) => {
                    return (
                      <li key={navlink.id} className="font-bold text-lg">
                        <Link href={`${navlink.url}`}>{navlink.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          <button
            onClick={() => setShowMenu(true)}
            className="mid:hidden text-3xl rounded-full p-1"
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
