import CategoryTag from "./categoryTag";
import CategoryTagWithBlock from "./categoryTagWithBlock";

type CategoryNavBarProps = {
  categories: string[];
};

const CategoryNavBar = ({ categories }: CategoryNavBarProps) => {
  return (
    <>
      <div className='relatvie invisible xl:visible'>
        <div className='relative -left-64'>
          <div className='absolute'>
            <div>
              <div className='text-xl my-1 md:text-2xl md:my-3'>Categories</div>
              <div className='w-16 h-0.5 bg-neutral-900' />
              <ul className='list-none flex-col mt-3'>
                <CategoryTag text='전체' count={15} />
                <CategoryTag text='개발' count={5} />
                <CategoryTag text='잡담' count={10} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='visible my-3 xl:invisible'>
        <div>
          <p className='my-2 text-xl'>Categories</p>
          <div className='w-16 h-0.5 bg-neutral-900' />
        </div>
        <ul className='mt-3 flex list-none'>
          <CategoryTagWithBlock text='전체' />
          <CategoryTagWithBlock text='개발' />
          <CategoryTagWithBlock text='잡담' />
        </ul>
      </div>
    </>
  );
};

export default CategoryNavBar;
