type CategoryTagWithBlockProps = {
  text: string;
};

const CategoryTagWithBlock = ({ text }: CategoryTagWithBlockProps) => {
  return (
    <p className='border-2 mx-1 rounded border-gray-900 px-1 hover:text-white hover:bg-gray-900'>
      {text}
    </p>
  );
};

export default CategoryTagWithBlock;
