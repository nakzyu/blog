import { TagFreq } from "../../types";
import Tag from "./tag";

type TagNavBarProps = {
  tags: TagFreq[];
  currentTag: string;
};

const TagNavBar = ({ tags, currentTag }: TagNavBarProps) => {
  const sum = tags.reduce((a, b) => a + b.count, 0);
  const isSelected = (target: string) => target === currentTag;
  const makeTags = (isVertical: boolean) => [
    <Tag
      key="All"
      text="All"
      count={sum}
      isVertical={isVertical}
      isSelected={isSelected("All")}
    />,
    ...tags.map(({ text, count }) => (
      <Tag
        key={text}
        text={text}
        count={count}
        isVertical={isVertical}
        isSelected={isSelected(text)}
      />
    )),
  ];

  return (
    <>
      <div className="relatvie hidden xl:inline">
        <div className="relative -left-64">
          <div className="absolute mt-8">
            <div>
              <div className="text-xl my-4 md:text-2xl">Tags</div>
              <div className="w-16 h-0.5" />
              <ul className="list-none max-w-[205px] flex flex-wrap">
                {makeTags(false)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="none mt-4 xl:hidden">
        <div>
          <p className="my-2 text-xl">Tags</p>
          <div className="w-16 h-0.5" />
        </div>
        <ul className="mt-3 max-w-full  inline-flex list-none  overflow mobile:overflow-x-scroll">
          {makeTags(true)}
        </ul>
        <div className="bg-neutral-200 h-0.5 mt-3" />
      </div>
    </>
  );
};

export default TagNavBar;
