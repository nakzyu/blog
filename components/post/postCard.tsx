/* eslint-disable @next/next/no-img-element */
import { PostMetadata } from "../../types/post";
import CategoryTagWithBlock from "../category/categoryTagWithBlock";

type PostCardProps = {
  data: PostMetadata;
};

const PostCard = ({ data }: PostCardProps) => {
  return (
    <div className='mt-4 md:mt-6'>
      <img
        className='cursor-pointer object-cover w-full h-64 md:h-96 '
        src={`/images/${data.thumbnail || "profile.jpg"}`}
        alt='image'
      />
      <h2 className='cursor-pointer text-xl my-1 md:text-2xl md:my-3'>
        {data.title}
      </h2>
      <p className='text-sm cursor-pointer text-gray-600 my-2 md:text-base md:my-4'>
        {data.description}
      </p>
      <div className='cursor-pointer flex'>
        <CategoryTagWithBlock text={data.category} />
        <p className='ml-2 mt-0.5'>{data.publishedDate}</p>
      </div>
    </div>
  );
};

export default PostCard;
