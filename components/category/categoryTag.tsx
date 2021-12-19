import Link from "next/link";

type CategoryTagProps = {
  text: string;
  isSelected: boolean;
  isBordered: boolean;
  count?: number;
};

const CategoryTag = ({
  text,
  count,
  isSelected,
  isBordered,
}: CategoryTagProps) => {
  return (
    <Link href={text === "All" ? "/" : `/category/${text}`} passHref>
      {isBordered ? (
        <p
          className={`cursor-pointer border-2 mr-2 rounded border-neutral-900 px-1 hover:text-white hover:bg-neutral-900 ${
            isSelected ? "bg-neutral-900 text-white" : ""
          }`}
        >
          {text} {count ? `(${count})` : ""}
        </p>
      ) : (
        <p
          className={`cursor-pointer text-m text-neutral-600 my-0.5 flex ${
            isSelected ? "text-neutral-900 font-bold" : ""
          }`}
        >
          {text} {count ? `(${count})` : ""}
        </p>
      )}
    </Link>
  );
};

export default CategoryTag;
