import { GetStaticPaths, GetStaticPropsContext } from "next";
import { Post } from "../../../types/post";
import {
  getAllPostsByTag,
  getAllPathsOfTags,
  getAllTagsAndFreqs,
} from "../../../utils/postHandler";
import { TagFreq } from "../../../types/tagFreq";
import TagNavAndPostList from "../../../components/intergrated/tagNavAndPostList";
import { ITEMS_PER_PAGE } from "../../../constants";
import { useRouter } from "next/router";
import { clacPageInfo } from "../../../utils/clacCurrentPage";

type PostsByTagPageProps = {
  posts: Post[];
  tags: TagFreq[];
};

const PostsByTagPage = ({ posts, tags }: PostsByTagPageProps) => {
  const { asPath } = useRouter();
  const { currnetPage, startIndex, endIndex } = clacPageInfo(
    asPath,
    posts.length,
    ITEMS_PER_PAGE
  );

  const tag = posts[0].data.tag;

  return (
    <TagNavAndPostList
      tags={tags}
      currentTag={tag}
      posts={posts.slice(startIndex, endIndex)}
      paginatorProps={{
        currnetPage,
        itemsPerPage: ITEMS_PER_PAGE,
        length: posts.length,
        tag,
      }}
    />
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
