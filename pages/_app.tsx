import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import { PUBLIC_URL } from "../constants";
import SetHead from "../utils/ApplyHead";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.route.split("/")[1];

  const headOptions = {
    "og:title": "blog.nakzyu.com",
    "og:url": PUBLIC_URL,
  };

  return (
    <>
      <SetHead title="blog.nakzyu.com" options={headOptions} />
      <div className="flex-col">
        <div className="w-full bg-[#181818] text-white border-b-neutral-200">
          <div className="max-w-4xl m-auto h-16 lg:max-h-28">
            <Header route={route} />
          </div>
        </div>
        <div className="mx-4 md:mx-0">
          <div className="max-w-2xl m-auto min-h-[91.5vh] flex flex-col flex-1">
            <Component {...pageProps} />
          </div>
        </div>
        <div className="w-full bg-[#181818] text-white">
          <div className="max-w-4xl m-auto h-16">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
