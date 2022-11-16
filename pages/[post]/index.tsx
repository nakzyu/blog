import { GetStaticPropsContext } from "next";
import Comments from "../../components/layouts/comments";
import PostBody from "../../components/post/postBody";
import PostHead from "../../components/post/postHead";
import { Post } from "../../types";
import SetHead from "../../utils/ApplyHead";
import { getAllPathsOfPosts, getPost } from "../../utils/postHandler";

type PostPageProps = {
  post: Post;
};
const PostPage = ({ post }: PostPageProps) => {
  const headOptions = {
    "og:title": post.data.title,
    "og:image": `/images/${post.data.thumbnail || "logo.png"}`,
  };

  return (
    <>
      <SetHead title={post.data.title} options={headOptions} />
      <PostHead data={post.data} content={post.content} />
      <PostBody data={post.data} content={post.content} />
      <Comments />
    </>
  );
};

export const getStaticPaths = () => {
  const paths = getAllPathsOfPosts();
  return { paths, fallback: false };
};

interface PostPageStaticProps extends GetStaticPropsContext {
  params: { post: string };
}

export const getStaticProps = ({ params }: PostPageStaticProps) => {
  const post = getPost(params.post);

  return { props: { post } };
};

export default PostPage;
