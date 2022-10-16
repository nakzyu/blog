import classNames from "classnames";
import Link from "next/link";

type TagTypes = "React" | "All" | "ETC";

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
  ETC: {
    text: "white",
    background: "rgb(239,63,32)",
  },
  Javascript: {
    text: "black",
    background: "#ecdb54",
  },
};

const Tag = ({ text, count, isSelected }: TagProps) => {
  return (
    <Link href={text === "All" ? "/" : `/tag/${text}`} passHref>
      <div
        className={classNames(
          "cursor-pointer p-[8px] whitespace-nowrap font-bold text-m mt-0.5 flex rounded-[3px] mb-1 mr-2 text-neutral-400  hover:opacity-50 duration-200 break-no",
          isSelected && "opacity-50"
        )}
        style={{
          color: TagColors[text].text,
          background: TagColors[text].background,
        }}
      >
        {text} {count ? `(${count})` : ""}
      </div>
    </Link>
  );
};

export default Tag;
