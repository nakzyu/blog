import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.route.split("/")[1];

  return (
    <div className='flex-col'>
      <div className='w-full bg-neutral-900 text-white border-b-neutral-200'>
        <div className='max-w-4xl m-auto h-16 lg:max-h-28'>
          <Header route={route} />
        </div>
      </div>
      <div className='mx-4 md:mx-0'>
        <div className='max-w-2xl m-auto min-h-screen'>
          <Component {...pageProps} />
        </div>
      </div>
      <div className='w-full bg-neutral-900 text-white'>
        <div className='max-w-4xl m-auto h-16'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
