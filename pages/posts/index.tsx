import { Post } from "../../types/post";
import PostList from "../../components/post/postList";
import { getAllPosts } from "../../utils/postHandler";

type PostIndexPageProps = {
  posts: Post[];
};

const PostIndexPage = ({ posts }: PostIndexPageProps) => {
  return <PostList posts={posts} />;
};

export const getStaticProps = () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default PostIndexPage;
