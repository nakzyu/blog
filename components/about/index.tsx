import dynamic from "next/dynamic";

const Babylon = dynamic(() => import("./babylon"), { ssr: false });

export default function About() {
  return <Babylon />;
}