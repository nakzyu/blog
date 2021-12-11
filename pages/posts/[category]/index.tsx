import { GetStaticPaths, GetStaticPropsContext } from "next";
import PostBody from "../../../components/post/postBody";
import PostHead from "../../../components/post/postHead";
import { Post } from "../../../types/post";
import { getAllPostsByCategory, getPaths } from "../../../utils/postHandler";

type PostPageProps = {
  posts: Post[];
};

const PostPage = ({ posts }: PostPageProps) => {
  const results = posts.map(({ data, content }) => (
    <li key={data.title}>
      <PostHead data={data} content={content} />
      <PostBody data={data} content={content} />
    </li>
  ));
  return <ul className='list-none'>{results}</ul>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPaths();
  return { paths, fallback: false };
};

interface StaticProps extends GetStaticPropsContext {
  params: { category: string };
}

export const getStaticProps = ({ params }: StaticProps) => {
  const posts = getAllPostsByCategory(params.category);
  console.log(posts);
  return { props: { posts } };
};

export default PostPage;
