/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
  return (
    <div className='mx-4 md:mx-0 h-full flex justify-end items-center'>
      <p className='mr-5'>nakzyu@gmail.com</p>
      <div className='flex'>
        <Link href='https://github.com/nakzyu/blog' passHref>
          <img
            className=' cursor-pointer'
            src='images/GitHub-Mark-Light-32px.png'
            alt='githubMark'
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
