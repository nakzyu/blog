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
          className={`cursor-pointer border-2 mx-1 rounded border-gray-900 px-1 hover:text-white hover:bg-gray-900 ${
            isSelected ? "bg-neutral-900 text-white" : ""
          }`}
        >
          {text} {count ? `(${count})` : ""}
        </p>
      ) : (
        <p className='cursor-pointer text-m text-gray-600 my-0.5 flex'>
          {text} {count ? `(${count})` : ""}
        </p>
      )}
    </Link>
  );
};

export default CategoryTag;
