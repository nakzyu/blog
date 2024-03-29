import { PostMetadata } from "../../types";

type PostHistoryProps = {
  data: PostMetadata;
};

const PostHistory = ({ data }: PostHistoryProps) => {
  return (
    <div className="flex">
      <p>{data.publishedDate}</p>
      <p>{data.tag}</p>
      <p>{data.title}</p>
    </div>
  );
};

export default PostHistory;
