import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className='flex  justify-between bg-slate-600'>
      <Image src='/images/profile.jpg' alt='image' width='50' height='50' />
      <div className='flex justify-between'>
        <Link href='/about' passHref>
          <div>about me</div>
        </Link>
        <Link href='/category/all' passHref>
          <div>posts</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
