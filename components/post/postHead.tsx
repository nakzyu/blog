import { Post } from "../../types/post";

const PostHead = ({ data }: Post) => (
  <div>
    <h2>ddddddd d</h2>
    <p>{data.category}</p>
    <h1>{data.title}</h1>
    <p> 10일전</p>
    <button>ddd</button>
  </div>
);

export default PostHead;
