import { TagFreq } from "../../types/tagFreq";
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
      key='All'
      text='All'
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
      <div className='relatvie invisible xl:visible'>
        <div className='relative -left-64'>
          <div className='absolute'>
            <div>
              <div className='text-xl my-1 md:text-2xl md:my-3'>Tags</div>
              <div className='w-16 h-0.5 bg-neutral-900' />
              <ul className='list-none flex-col mt-3'>{makeTags(false)}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className='visible none my-3 xl:hidden'>
        <div>
          <p className='my-2 text-xl'>Tags</p>
          <div className='w-16 h-0.5 bg-neutral-900' />
        </div>
        <ul className='mt-3 flex list-none'>{makeTags(true)}</ul>
        <div className='bg-neutral-200 h-0.5 mt-3' />
      </div>
    </>
  );
};

export default TagNavBar;
