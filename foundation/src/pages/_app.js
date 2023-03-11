import "@/styles/globals.css";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  variable: '--font-barlow',
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${barlow.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
