import type { AppProps } from "next/app";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='md:container md:mx-auto'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
