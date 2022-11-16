import Link from "next/link";

const genLink = (route: string, text: string, isActive: boolean) => {
  const classes = isActive
    ? "cursor-pointer ml-2 px-2 py-1 text-black font-bold bg-white"
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
    <header className="flex h-full  items-center justify-between mx-4 lg:mx-0 ">
      <Link href="/" passHref>
        <a className="flex items-center">
          <img
            src="/images/logo.png"
            className="w-7 h-7 rounded-full mr-1 ml-1"
            alt="logo"
          />
          <div className="p-1 font-bold e cursor-pointer">blog.nakzyu.ch</div>
        </a>
      </Link>

      <div className="flex justify-between items-center">
        {genLink("about", "ABOUT", match(route))}
        {genLink("", "POSTS", !match(route))}
      </div>
    </header>
  );
};

export default Header;
