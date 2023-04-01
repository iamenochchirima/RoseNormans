import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CookieConsent from "react-cookie-consent";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
      <CookieConsent
        style={{
          textAlign: "center",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
        }}
        buttonStyle={{ background: "#3B82F6", color: "white" }}
        buttonText="Okay"
        expires={150}
      >
        This website uses third-party analytics services to help enhance the
        user experience. For more information see our{" "}
        <a className="underline" href="policy">
          privacy policy
        </a>
      </CookieConsent>
    </Layout>
  );
}
