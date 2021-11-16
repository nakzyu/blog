import { GetStaticPropsContext, NextPage } from "next";
import PostType from "../../../public/types/postType";
import PostBody from "../../components/postBody";
import PostHead from "../../components/postHead";
import { getPaths, getPost } from "../../utils/postHandler";

const PostPage: NextPage<PostType> = ({ data, content }) => {
  return (
    <>
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
  const file = getPost(params.slug);
  return {
    props: file,
  };
};

export default PostPage;
