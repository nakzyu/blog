import { CategoryFreq } from "../../types/categoryFreq";
import CategoryTag from "./categoryTag";

type CategoryNavBarProps = {
  categories: CategoryFreq[];
  currentCategory: string;
};

const CategoryNavBar = ({
  categories,
  currentCategory,
}: CategoryNavBarProps) => {
  const sum = categories.reduce((a, b) => a + b.count, 0);
  const isSelected = (target: string) => target === currentCategory;
  const makeCategories = (isVertical: boolean) => [
    <CategoryTag
      key='All'
      text='All'
      count={sum}
      isVertical={isVertical}
      isSelected={isSelected("All")}
    />,
    ...categories.map(({ text, count }) => (
      <CategoryTag
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
              <div className='text-xl my-1 md:text-2xl md:my-3'>Categories</div>
              <div className='w-16 h-0.5 bg-neutral-900' />
              <ul className='list-none flex-col mt-3'>
                {makeCategories(false)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='visible none my-3 xl:hidden'>
        <div>
          <p className='my-2 text-xl'>Categories</p>
          <div className='w-16 h-0.5 bg-neutral-900' />
        </div>
        <ul className='mt-3 flex list-none'>{makeCategories(true)}</ul>
        <div className='bg-neutral-200 h-0.5 mt-3' />
      </div>
    </>
  );
};

export default CategoryNavBar;
