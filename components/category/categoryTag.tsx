import Link from "next/link";

type CategoryTagProps = {
  text: string;
  isSelected: boolean;
  isVertical: boolean;
  count?: number;
};

const CategoryTag = ({ text, count, isSelected }: CategoryTagProps) => {
  return (
    <Link href={text === "All" ? "/" : `/category/${text}`} passHref>
      <p
        className={`cursor-pointer text-m text-neutral-600 my-0.5 flex ${
          isSelected ? "text-neutral-900 font-bold" : ""
        }`}
      >
        {text} {count ? `(${count})` : ""}
      </p>
    </Link>
  );
};

export default CategoryTag;
