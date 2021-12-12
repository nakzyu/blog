import { GetStaticPropsContext } from "next";
import PostBody from "../../../../components/post/postBody";
import PostHead from "../../../../components/post/postHead";
import { Post } from "../../../../types/post";
import SetHead from "../../../../utils/ApplyHead";
import { getAllPathsOfPosts, getPost } from "../../../../utils/postHandler";

type PostPageProps = {
  post: Post;
};
const PostPage = ({ post }: PostPageProps) => {
  const headOptions = {
    "og:title": post.data.title,
  };

  return (
    <>
      <SetHead title={post.data.title} options={headOptions} />
      <PostHead data={post.data} content={post.content} />
      <PostBody data={post.data} content={post.content} />
    </>
  );
};

export const getStaticPaths = () => {
  const paths = getAllPathsOfPosts();
  return { paths, fallback: false };
};

interface PostPageStaticProps extends GetStaticPropsContext {
  params: { category: string; post: string };
}

export const getStaticProps = ({ params }: PostPageStaticProps) => {
  const post = getPost(params.post);
  return { props: { post } };
};

export default PostPage;
