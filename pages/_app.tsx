import type { AppProps } from "next/app";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='mx-1 sm:mx-4 lg:mx-16 flex-col'>
      <div className='max-w-4xl m-auto sm:max-h-16  lg:max-h-28'>
        <Header />
      </div>
      <div className='max-w-2xl m-auto'>
        <Component className='' {...pageProps} />
      </div>
      <div className='max-w-4xl m-auto sm:max-h-16  lg:max-h-28'>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
