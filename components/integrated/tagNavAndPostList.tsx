import { Post } from "../../types/post";
import { TagFreq } from "../../types/tagFreq";
import Paginator, { PaginatorProps } from "../layouts/paginator";
import PostList from "../post/postList";
import TagNavBar from "../tag/tagNavBar";

type TagNavAndPostListProps = {
  tags: TagFreq[];
  posts: Post[];
  currentTag: string;
  paginatorProps: PaginatorProps;
};

export default function TagNavAndPostList({
  tags,
  posts,
  currentTag,
  paginatorProps,
}: TagNavAndPostListProps) {
  return (
    <>
      <TagNavBar tags={tags} currentTag={currentTag} />
      <PostList posts={posts} />
      <Paginator {...paginatorProps} />
    </>
  );
}
