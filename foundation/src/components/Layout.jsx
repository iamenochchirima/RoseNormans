import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, content, children }) => {
  return (
    <div className="flex font-graphik justify-center items-start">
      <div className=" xl:max-w-[1500px] w-full ">
        <Head>
          <title>{title}</title>
        </Head>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Rose Normans Foundation | Mental Health Organisation",
  content: "Rose Normans foundation",
};

export default Layout;
