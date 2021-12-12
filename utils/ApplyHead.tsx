/* eslint-disable @next/next/no-document-import-in-page */
import Head from "next/head";

type SetHeadProps = {
  title: string;
  options: Record<string, string>;
};

const SetHead = ({ title, options }: SetHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      {Object.entries(options).map(([key, property]) => (
        <meta key={key} name={key} content={property}></meta>
      ))}
    </Head>
  );
};

export default SetHead;
