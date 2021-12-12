import { Post } from "../../types/post";

const PostHead = ({ data }: Post) => (
  <div>
    <h2>ddddddd d</h2>
    <p>{data.category}</p>
    <h1>{data.title}</h1>
    <p>{data.publishedDate}</p>
  </div>
);

export default PostHead;
