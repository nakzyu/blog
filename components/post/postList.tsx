import { Post } from "../../types/post";
import PostCard from "./postCard";
import Link from "next/link";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => (
  <div className='list-none'>
    {posts.map(({ data }) => (
      <Link href={`/${data.title}`} passHref key={data.title}>
        <div>
          <PostCard data={data} />
        </div>
      </Link>
    ))}
  </div>
);

export default PostList;
