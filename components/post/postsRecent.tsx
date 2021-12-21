import { Post } from "../../types/post";

type PostsRecentProps = {
  posts: Post[];
};

const PostsRecent = ({ posts }: PostsRecentProps) => {
  return <div>post recent</div>;
};

export default PostsRecent;
