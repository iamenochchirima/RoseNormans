import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black pb-5 text-white">
      <div className="mx-5 md:mx-20 py-5 footer">
        <div className="">
          <ul className="font-graphikExtralight sm:flex sm:gap-10">
            <li>
              <Link href={"#"}>About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <Link href={"#"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col  pb-2">
          <ul className="text-xl text-dimWhite flex mt-5 sm:mt-0 ss:justify-start gap-5 mid:justify-between">
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-col mx-5 md:mx-20 text-sm text-dimWhite items-center">
        <p>
          Copyright © 2023 Rose Normans Foundation. All rights reserved.
        </p>
        <p>
        <a className="" href="https://www.enochchirima.com" target="_blank"> Designed and developed by <span className=" font-bold">Enoch</span></a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
