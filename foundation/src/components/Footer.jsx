import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="p-4 xs:mx-5 ss:mx-8 md:mx-36 footer">
        <div className="flex flex-col space-y-2 border-b sm:border-none pb-5">
          <div className="flex items-center justify-center ss:justify-start ">
            <Image
              className=""
              src={"/icon.svg"}
              width="50"
              height="50"
            ></Image>
            <ul className="flex flex-col ">
              <li className=" text-lg font-bold">ROSE NORMANS FOUNDATION</li>
              <li className=" font-medium text-sm tracking-widest">
                MENTAL HEALTH ORGANISATION
              </li>
            </ul>
          </div>
          <p>450 Central Park West</p>
          <p>New York, NY</p>
          <p>Email: rosenormansfoundation@gmail.com</p>
          <p>Phone: +260 123 456</p>
        </div>
        <div className="border-b sm:border-none pt-4 sm:pt-0 pb-5">
          <ul>
            <li>
              <Link href={"#"}>ABOUT US</Link>
            </li>
            <li>
              <Link href={"#"}>OUR PROJECTS</Link>
            </li>
            <li>
              <Link href={"#"}>SERVICES</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 pb-5">
          <span>CONNECT WITH US</span>
          <div className="text-3xl flex justify-center ss:justify-start space-x-2 mid:justify-between">
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t mx-10 ss:mx-36 text-sm text-dimWhite">
        <span>Created by <a className="text-white" href="https://enoch-chirima.vercel.app/" target="_blank">Enoch Chirima</a></span>
      </div>
    </div>
  );
};

export default Footer;
