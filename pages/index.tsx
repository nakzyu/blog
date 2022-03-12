import { getAllTagsAndFreqs, getAllPosts } from "../utils/postHandler";
import { Post } from "../types/post";
import { TagFreq } from "../types/tagFreq";
import TagNavAndPostList from "../components/integrated/tagNavAndPostList";
import { ITEMS_PER_PAGE } from "../constants";
import { useRouter } from "next/router";
import { clacPageInfo } from "../utils/clacCurrentPage";

type PostsByAllTagPageProps = {
  posts: Post[];
  tags: TagFreq[];
};

const PostsByAllTagPage = ({ posts, tags }: PostsByAllTagPageProps) => {
  const { asPath } = useRouter();

  const { currnetPage, startIndex, endIndex } = clacPageInfo(
    asPath,
    posts.length,
    ITEMS_PER_PAGE
  );

  return (
    <TagNavAndPostList
      tags={tags}
      currentTag={"All"}
      posts={posts.slice(startIndex, endIndex)}
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
