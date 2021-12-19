import { GetStaticPropsContext } from "next";
import CategoryNavBar from "../../components/category/categoryNavBar";
import PostBody from "../../components/post/postBody";
import PostHead from "../../components/post/postHead";
import { CategoryFreq } from "../../types/categoryFreq";
import { Post } from "../../types/post";
import SetHead from "../../utils/ApplyHead";
import {
  getAllCategoriesAndFreqs,
  getAllPathsOfPosts,
  getPost,
} from "../../utils/postHandler";

type PostPageProps = {
  post: Post;
  categories: CategoryFreq[];
};
const PostPage = ({ post, categories }: PostPageProps) => {
  const headOptions = {
    "og:title": post.data.title,
  };

  return (
    <>
      <SetHead title={post.data.title} options={headOptions} />
      <CategoryNavBar
        categories={categories}
        currentCategory={post.data.category}
      />
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
  params: { post: string };
}

export const getStaticProps = ({ params }: PostPageStaticProps) => {
  const post = getPost(params.post);
  const categories = getAllCategoriesAndFreqs();
  return { props: { post, categories } };
};

export default PostPage;
