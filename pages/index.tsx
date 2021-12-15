import { getAllPosts } from "../utils/postHandler";
import PostList from "../components/post/postList";
import { Post } from "../types/post";

type PostsByAllCategoryPageProps = {
  posts: Post[];
};

const PostsByAllCategoryPage = ({ posts }: PostsByAllCategoryPageProps) => {
  return <PostList posts={posts} />;
};

export const getStaticProps = () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default PostsByAllCategoryPage;
