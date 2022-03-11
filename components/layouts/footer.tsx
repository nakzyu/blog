/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
  return (
    <div className='mx-4 lg:mx-0 h-full flex justify-end items-center'>
      <p className='mr-3'>nakzyu@gmail.com</p>
      <div className='flex'>
        <Link href='https://github.com/nakzyu' passHref>
          <img
            className=' cursor-pointer w-6 h-6'
            src='images/GitHub-Mark-Light-64px.png'
            alt='githubMark'
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
