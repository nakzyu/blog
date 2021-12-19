import { Post } from "../../types/post";
import PostCard from "./postCard";
import Link from "next/link";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => (
  <>
    <div className='list-none mb-3'>
      {posts.map(({ data }) => (
        <PostCard key={data.title} data={data} />
      ))}
    </div>
  </>
);

export default PostList;
