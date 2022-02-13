import { GetStaticPaths, GetStaticPropsContext } from "next";
import { Post } from "../../../types/post";
import {
  getAllPostsByTag,
  getAllPathsOfTags,
  getAllTagsAndFreqs,
} from "../../../utils/postHandler";
import PostList from "../../../components/post/postList";
import TagNavBar from "../../../components/tag/tagNavBar";
import { TagFreq } from "../../../types/tagFreq";
import TagNavAndPostList from "../../../components/intergrated/TagNavAndPostList";
import { ITEMS_PER_PAGE } from "../../../constants";
import { useRouter } from "next/router";
import { calcCurrentPage } from "../../../utils/clacCurrentPage";

type PostsByTagPageProps = {
  posts: Post[];
  tags: TagFreq[];
};

const PostsByTagPage = ({ posts, tags }: PostsByTagPageProps) => {
  const { asPath } = useRouter();
  const currnetPage = calcCurrentPage(asPath, posts.length, ITEMS_PER_PAGE);

  return (
    <TagNavAndPostList
      tags={tags}
      currentTag={posts[0].data.tag}
      posts={posts}
      paginatorProps={{
        currnetPage,
        itemsPerPage: ITEMS_PER_PAGE,
        length: posts.length,
        tag: tags[0].text,
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
