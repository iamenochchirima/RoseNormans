import "@/styles/globals.css";
import '@fontsource/inter';
import { Barlow } from "next/font/google";

export default function App({ Component, pageProps }) {
  return (
    <div className={` font-graphik`}>
      <Component {...pageProps} />
    </div>
  );
}
