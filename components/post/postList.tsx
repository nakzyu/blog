import { Post } from "../../types";
import PostCard from "./postCard";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => (
  <div className="list-none mb-3 flex-1 mt-4 xl:mt-8">
    {posts.map(({ data }) => (
      <PostCard key={data.title} data={data} />
    ))}
  </div>
);

export default PostList;
