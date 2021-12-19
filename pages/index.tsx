import { getAllPosts } from "../utils/postHandler";
import PostList from "../components/post/postList";
import { Post } from "../types/post";
import CategoryNavBar from "../components/category/categoryNavBar";

type PostsByAllCategoryPageProps = {
  posts: Post[];
};

const PostsByAllCategoryPage = ({ posts }: PostsByAllCategoryPageProps) => {
  return (
    <>
      <CategoryNavBar categories={[]} />
      <PostList posts={posts} />;
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default PostsByAllCategoryPage;
