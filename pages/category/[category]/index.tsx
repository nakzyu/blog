import { GetStaticPaths, GetStaticPropsContext } from "next";
import { Post } from "../../../types/post";
import {
  getAllPostsByCategory,
  getAllPathsOfCategories,
} from "../../../utils/postHandler";
import PostList from "../../../components/post/postList";

type PostsByCategoryPageProps = {
  posts: Post[];
};

const PostsByCategoryPage = ({ posts }: PostsByCategoryPageProps) => {
  return <PostList posts={posts} />;
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
  return { props: { posts } };
};

export default PostsByCategoryPage;
