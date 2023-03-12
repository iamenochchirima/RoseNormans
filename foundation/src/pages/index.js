import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
}
