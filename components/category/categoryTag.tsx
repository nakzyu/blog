type CategoryTagProps = {
  text: string;
  count: number;
};

const CategoryTag = ({ text, count }: CategoryTagProps) => {
  return (
    <p className='text-m text-gray-600 my-0.5 flex '>
      {text} ({count})
    </p>
  );
};

export default CategoryTag;
