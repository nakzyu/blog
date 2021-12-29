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
        className={`cursor-pointer text-m mb-1 mr-2 text-neutral-600 mt-0.5 flex ${
          isSelected ? "text-neutral-900 font-bold" : ""
        }`}
      >
        {text} {count ? `(${count})` : ""}
      </p>
    </Link>
  );
};

export default CategoryTag;
