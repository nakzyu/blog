import { getAllCategoriesAndFreqs, getAllPosts } from "../utils/postHandler";
import PostList from "../components/post/postsList";
import { Post } from "../types/post";
import CategoryNavBar from "../components/category/categoryNavBar";
import { CategoryFreq } from "../types/categoryFreq";

type PostsByAllCategoryPageProps = {
  posts: Post[];
  categories: CategoryFreq[];
};

const PostsByAllCategoryPage = ({
  posts,
  categories,
}: PostsByAllCategoryPageProps) => {
  return (
    <>
      <CategoryNavBar categories={categories} currentCategory={"All"} />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();
  const categories = getAllCategoriesAndFreqs();
  return { props: { posts, categories } };
};

export default PostsByAllCategoryPage;
