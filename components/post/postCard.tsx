/* eslint-disable @next/next/no-img-element */
import { PostMetadata } from "../../types/post";

type PostCardProps = {
  data: PostMetadata;
};

const PostCard = ({ data }: PostCardProps) => {
  return (
    <>
      <img className='cursor-pointer' src='/images/profile.jpg' alt='image' />
      <h2 className='cursor-pointer'>{data.title}</h2>
      <p className='cursor-pointer'>{data.description}</p>
      <div className='cursor-pointer'>{data.publishedDate}</div>
    </>
  );
};

export default PostCard;
