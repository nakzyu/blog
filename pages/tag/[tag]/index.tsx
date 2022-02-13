import { GetStaticPaths, GetStaticPropsContext } from "next";
import { Post } from "../../../types/post";
import {
  getAllPostsByTag,
  getAllPathsOfTags,
  getAllTagsAndFreqs,
} from "../../../utils/postHandler";
import PostList from "../../../components/post/postsList";
import TagNavBar from "../../../components/tag/tagNavBar";
import { TagFreq } from "../../../types/tagFreq";

type PostsByTagPageProps = {
  posts: Post[];
  tags: TagFreq[];
};

const PostsByTagPage = ({ posts, tags }: PostsByTagPageProps) => {
  return (
    <>
      <TagNavBar tags={tags} currentTag={posts[0].data.tag} />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPathsOfTags();
  return { paths, fallback: false };
};

interface StaticProps extends GetStaticPropsContext {
  params: { tag: string };
}

export const getStaticProps = ({ params }: StaticProps) => {
  const posts = getAllPostsByTag(params.tag);
  const tags = getAllTagsAndFreqs();
  return { props: { posts, tags } };
};

export default PostsByTagPage;
