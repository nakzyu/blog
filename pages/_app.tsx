import type { AppProps } from "next/app";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex-col'>
      <div className='w-full border-b border-b-neutral-200'>
        <div className='max-w-4xl m-auto sm:max-h-16 lg:max-h-28'>
          <Header />
        </div>
      </div>
      <div className='w-full'>
        <div className='max-w-2xl m-auto'>
          <Component {...pageProps} />
        </div>
      </div>
      <div className='w-full bg-neutral-900 text-white'>
        <div className='max-w-4xl m-auto sm:max-h-16 lg:max-h-28'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
