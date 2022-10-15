import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-4 lg:mx-0 h-full flex justify-end items-center">
      <div className="flex">
        <Link href="https://github.com/nakzyu" passHref>
          <img
            className="cursor-pointer w-6 h-6"
            src="/images/GitHub-Mark-Light-64px.png"
            alt="githubMark"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
