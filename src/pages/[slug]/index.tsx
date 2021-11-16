import { GetStaticPropsContext, NextPage } from "next";
import PostType from "../../../public/types/postType";
import PostBody from "../../components/postBody";
import { getPaths, getPost } from "../../utils/postHandler";

const PostPage: NextPage<PostType> = ({ data, content }) => {
  return <PostBody data={data} content={content} />;
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
  console.log(file);
  return {
    props: file,
  };
};

export default PostPage;
