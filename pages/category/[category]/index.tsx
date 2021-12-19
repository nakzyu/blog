import { GetStaticPaths, GetStaticPropsContext } from "next";
import { Post } from "../../../types/post";
import {
  getAllPostsByCategory,
  getAllPathsOfCategories,
  getAllCategoriesAndFreqs,
} from "../../../utils/postHandler";
import PostList from "../../../components/post/postList";
import CategoryNavBar from "../../../components/category/categoryNavBar";
import { CategoryFreq } from "../../../types/categoryFreq";

type PostsByCategoryPageProps = {
  posts: Post[];
  categories: CategoryFreq[];
};

const PostsByCategoryPage = ({
  posts,
  categories,
}: PostsByCategoryPageProps) => {
  return (
    <>
      <CategoryNavBar
        categories={categories}
        currentCategory={posts[0].data.category}
      />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPathsOfCategories();
  return { paths, fallback: false };
};

interface StaticProps extends GetStaticPropsContext {
  params: { category: string };
}

export const getStaticProps = ({ params }: StaticProps) => {
  const posts = getAllPostsByCategory(params.category);
  const categories = getAllCategoriesAndFreqs();
  return { props: { posts, categories } };
};

export default PostsByCategoryPage;
