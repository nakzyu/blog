import { getAllTagsAndFreqs, getAllPosts } from "../utils/postHandler";
import PostList from "../components/post/postList";
import { Post } from "../types/post";
import TagNavBar from "../components/tag/tagNavBar";
import { TagFreq } from "../types/tagFreq";
import TagNavAndPostList from "../components/intergrated/TagNavAndPostList";
import { ITEMS_PER_PAGE } from "../constants";
import { useRouter } from "next/router";
import { calcCurrentPage } from "../utils/clacCurrentPage";

type PostsByAllTagPageProps = {
  posts: Post[];
  tags: TagFreq[];
};

const PostsByAllTagPage = ({ posts, tags }: PostsByAllTagPageProps) => {
  const { asPath } = useRouter();

  posts = [
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
  ];

  const currnetPage = calcCurrentPage(asPath, posts.length, ITEMS_PER_PAGE);

  return (
    <TagNavAndPostList
      tags={tags}
      currentTag={"All"}
      posts={posts}
      paginatorProps={{
        currnetPage,
        itemsPerPage: ITEMS_PER_PAGE,
        length: posts.length,
      }}
    />
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();
  const tags = getAllTagsAndFreqs();
  return { props: { posts, tags } };
};

export default PostsByAllTagPage;
