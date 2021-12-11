import { GetStaticPropsContext, NextPage } from "next";
import { Post } from "../../../types/post";
import Header from "../../../components/header";
import PostBody from "../../../components/post/postBody";
import PostHead from "../../../components/post/postHead";
import { getPaths, getPost } from "../../../utils/postHandler";

const PostPage: NextPage<Post> = ({ data, content }) => {
  return (
    <>
      <Header />
      <PostHead data={data} content={content} />
      <PostBody data={data} content={content} />;
    </>
  );
};

export const getStaticPaths = () => {
  const paths = getPaths();
  return { paths, fallback: false };
};

interface StaticProps extends GetStaticPropsContext {
  params: Record<string, string>;
}

export const getStaticProps = ({ params }: StaticProps) => {
  console.log(params);
};

export default PostPage;
