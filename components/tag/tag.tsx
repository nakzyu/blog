import classNames from "classnames";
import Link from "next/link";
import { TagColors } from "../../constants";
import { TagTypes } from "../../types";

type TagProps = {
  text: TagTypes;
  isSelected: boolean;
  isVertical: boolean;
  count?: number;
};

const Tag = ({ text, count, isSelected }: TagProps) => {
  return (
    <Link href={text === "All" ? "/" : `/tag/${text.toLowerCase()}`} passHref>
      <div
        className={classNames(
          "cursor-pointer py-[8px] px-[12px] whitespace-nowrap font-bold text-m flex rounded-[8px] my-1 mr-2 text-neutral-400  hover:opacity-50 duration-200 transition-opacity break-no",
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
