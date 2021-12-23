/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PostMetadata } from "../../types/post";
import { fromNow } from "../../utils/dateHandler";
import CategoryTag from "../category/categoryTag";

type PostCardProps = {
  data: PostMetadata;
};

const PostCard = ({ data }: PostCardProps) => {
  return (
    <div className='mt-4 md:mt-6'>
      <Link href={`/${data.title}`} passHref>
        <img
          className='cursor-pointer object-cover w-full h-64 md:h-96 '
          src={`/images/${data.thumbnail || "profile.jpg"}`}
          alt='image'
        />
      </Link>
      <Link href={`/${data.title}`} passHref>
        <h2 className='cursor-pointer text-xl my-1 md:text-2xl md:my-3'>
          {data.title}
        </h2>
      </Link>

      <p className='text-sm text-gray-600 my-2 md:text-base md:my-4'>
        {data.description}
      </p>
      <div className='flex'>
        <CategoryTag
          text={data.category}
          isSelected={false}
          isVertical={true}
        />
        <p className='mt-0.5'>{fromNow(data.publishedDate)}</p>
      </div>
    </div>
  );
};

export default PostCard;
