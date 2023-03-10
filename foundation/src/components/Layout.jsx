import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Rose Normans Foundation | Mental Health Organisation",
  content: "Rose Normans foundation",
};

export default Layout;