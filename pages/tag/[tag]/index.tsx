import { GetStaticPaths, GetStaticPropsContext } from "next";
import {
  getAllPostsByTag,
  getAllPathsOfTags,
  getAllTagsAndFreqs,
} from "../../../utils/postHandler";
import TagNavAndPostList from "../../../components/integrated/tagNavAndPostList";
import { ITEMS_PER_PAGE } from "../../../constants";
import { useRouter } from "next/router";
import { clacPageInfo } from "../../../utils/clacCurrentPage";
import { Post, TagFreq } from "../../../types";
import SetHead from "../../../utils/ApplyHead";

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

  const categoryPageTitle = "blog.nakzyu.ch" + " - " + tag;

  const headOptions = {
    "og:title": categoryPageTitle,
    "og:image": `/images/logo.png`,
  };

  return (
    <>
      <SetHead title={categoryPageTitle} options={headOptions} />
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
