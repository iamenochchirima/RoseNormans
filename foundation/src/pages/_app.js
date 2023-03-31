import "@/styles/globals.css";
import '@fontsource/inter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <div className={` font-graphik`}>
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  );
}
