import Image from "next/image";
import Link from "next/link";

const genLink = (route: string, text: string, isActive: boolean) => {
  const classes = isActive
    ? "cursor-pointer ml-2 px-2 py-1 text-black bg-white rounded-sm"
    : "cursor-pointer ml-2 px-2 py-1";

  return (
    <Link href={`/${route}`} passHref>
      <div className={classes}>{text}</div>
    </Link>
  );
};

type HeaderProps = {
  route: string;
};

const Header = ({ route }: HeaderProps) => {
  const routeMaps: Record<string, boolean> = {
    about: true,
  };
  const match = (r: string) => (routeMaps[r] ? true : false);

  return (
    <header className='flex justify-between mx-4 lg:mx-0 '>
      <Image src='/images/profile.jpg' alt='image' width='50' height='50' />
      <div className='flex justify-between items-center'>
        {genLink("about", "ABOUT", match(route))}
        {genLink("", "POSTS", !match(route))}
      </div>
    </header>
  );
};

export default Header;
