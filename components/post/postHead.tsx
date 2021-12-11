import { Post } from "../../types/post";

export default function PostHead({ data, content }: Post) {
  return (
    <div>
      <p>{data.category}</p>
      <h1>{data.title}</h1>
      <p> 10일전</p>
    </div>
  );
}
