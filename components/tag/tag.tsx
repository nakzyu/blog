import Link from "next/link";

type TagProps = {
  text: string;
  isSelected: boolean;
  isVertical: boolean;
  count?: number;
};

const Tag = ({ text, count, isSelected }: TagProps) => {
  return (
    <Link href={text === "All" ? "/" : `/tag/${text}`} passHref>
      <p
        className={`cursor-pointer text-m mt-0.5 mb-1 mr-2 text-neutral-400  flex ${
          isSelected ? "text-[#efefef] font-bold" : ""
        }`}
      >
        {text} {count ? `(${count})` : ""}
      </p>
    </Link>
  );
};

export default Tag;
