/* eslint-disable @next/next/no-img-element */
import { PostMetadata } from "../../types/post";

type PostCardProps = {
  data: PostMetadata;
};

const PostCard = ({ data }: PostCardProps) => {
  return (
    <>
      <img className='cursor-pointer' src='/images/profile.jpg' alt='image' />
      <h2 className='cursor-pointer text-xl my-1 md:text-2xl md:my-3'>
        {data.title}
      </h2>
      <p className='text-sm text-gray-600 my-2 md:text-base md:my-4'>
        {data.description}
      </p>
      <div className='cursor-pointer'>{data.publishedDate}</div>
    </>
  );
};

export default PostCard;
