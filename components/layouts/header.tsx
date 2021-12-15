import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className='flex  justify-between'>
      <Image src='/images/profile.jpg' alt='image' width='50' height='50' />
      <div className='flex justify-between items-center'>
        <Link href='/about' passHref>
          <div>about me</div>
        </Link>
        <Link href='/' passHref>
          <div>posts</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
