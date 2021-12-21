import { PostMetadata } from "../../types/post";

type PostHistoryProps = {
  data: PostMetadata;
};

const PostHistory = ({ data }: PostHistoryProps) => {
  return (
    <div className='flex'>
      <p>{data.publishedDate}</p>
      <p>{data.category}</p>
      <p>{data.title}</p>
    </div>
  );
};

export default PostHistory;
