import { GetStaticPaths, GetStaticPropsContext } from "next";
import { Post } from "../../../types/post";
import {
  getAllPostsByCategory,
  getAllPathsOfCategories,
} from "../../../utils/postHandler";
import PostList from "../../../components/post/postList";

type AllPostsPageProps = {
  posts: Post[];
};

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
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

export default AllPostsPage;
