/* eslint-disable @next/next/no-img-element */
import { Post } from "../../types/post";
import { fromNow } from "../../utils/dateHandler";
import CategoryTag from "../category/categoryTag";

const PostHead = ({ data }: Post) => (
  <div className='mt-6'>
    <h1 className='text-gray-800 text-2xl mt-6 md:text-4xl md:mt-10'>
      {data.title}
    </h1>
    <div className='flex mt-4 md:mt-8'>
      <CategoryTag text={data.category} isSelected={false} isVertical={true} />
      <p className='mt-0.5'>{fromNow(data.publishedDate)}</p>
    </div>
    <img
      className='mt-4 md:mt-8 object-cover w-full h-64 md:h-96 '
      src={`/images/${data.thumbnail || "profile.jpg"}`}
      alt='image'
    />
  </div>
);

export default PostHead;
