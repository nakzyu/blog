import { Post } from "../../types/post";

const PostHead = ({ data }: Post) => (
  <div className='mt-6'>
    <h1>{data.title}</h1>
    <p>{data.category}</p>
    <p>{data.publishedDate}</p>
  </div>
);

export default PostHead;
