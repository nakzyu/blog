import { getAllTagsAndFreqs, getAllPosts } from "../utils/postHandler";
import PostList from "../components/post/postsList";
import { Post } from "../types/post";
import TagNavBar from "../components/tag/tagNavBar";
import { TagFreq } from "../types/tagFreq";

type PostsByAllTagPageProps = {
  posts: Post[];
  tags: TagFreq[];
};

const PostsByAllTagPage = ({ posts, tags }: PostsByAllTagPageProps) => {
  return (
    <>
      <TagNavBar tags={tags} currentTag={"All"} />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();
  const tags = getAllTagsAndFreqs();
  return { props: { posts, tags } };
};

export default PostsByAllTagPage;
