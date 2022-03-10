/* eslint-disable @next/next/no-img-element */

import { Post } from "../../types/post";

import Tag from "../tag/tag";
import TimeToolTip from "./TimeToolTip";

const PostHead = ({ data }: Post) => {
  return (
    <div className='mt-6 '>
      <h1 className='text-2xl mt-6 md:text-4xl md:mt-10'>{data.title}</h1>
      <div className='flex mt-4 md:mt-8'>
        <Tag text={data.tag} isSelected={false} isVertical={true} />
        <TimeToolTip publishedDate={data.publishedDate} />
      </div>

      {data.thumbnail && (
        <img
          className='mt-4 md:mt-8 object-cover w-full h-64 md:h-96 '
          src={`/images/${data.thumbnail}`}
          alt='image'
        />
      )}
    </div>
  );
};

export default PostHead;
