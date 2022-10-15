import classNames from "classnames";
import Link from "next/link";

type TagTypes = "React" | "All";

type TagProps = {
  text: TagTypes;
  isSelected: boolean;
  isVertical: boolean;
  count?: number;
};

const TagColors = {
  React: {
    text: "#61dafb",
    background: "#282c34",
  },
  All: {
    text: "black",
    background: "white",
  },
};

const Tag = ({ text, count, isSelected }: TagProps) => {
  return (
    <Link href={text === "All" ? "/" : `/tag/${text}`} passHref>
      <p
        className={classNames(
          "cursor-pointer p-[8px] font-bold text-m mt-0.5 rounded-[3px] mb-1 mr-2 text-neutral-400  flex  hover:opacity-50 duration-200",
          isSelected && "opacity-50"
        )}
        style={{
          color: TagColors[text].text,
          background: TagColors[text].background,
        }}
      >
        {text} {count ? `(${count})` : ""}
      </p>
    </Link>
  );
};

export default Tag;
