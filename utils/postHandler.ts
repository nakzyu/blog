import fs, { readFileSync } from "fs";
import path from "path";
import { Post } from "../types/post";
import matter from "gray-matter";
import { TagFreq } from "../types/tagFreq";

const root = process.cwd();
const postsDir = path.join(root + "/posts/");

export const getAllPosts = () =>
  fs
    .readdirSync(postsDir)
    .map((fileName) => matter(readFileSync(postsDir + fileName, "utf-8")))
    .map(
      (post) =>
        ({
          content: post.content,
          data: post.data,
        } as Post)
    );

export const getAllPathsOfTags = () => {
  const tagSet = new Set<string>();
  getAllPosts().forEach((post) => tagSet.add(post.data.tag));
  const tagPaths = Array.from(tagSet).map((tag) => ({
    params: { tag },
  }));

  return tagPaths;
};

export const getAllTagsAndFreqs = (): TagFreq[] =>
  Object.entries(
    getAllPosts().reduce((a, b) => {
      if (!a[b.data.tag]) {
        a[b.data.tag] = 0;
      }
      a[b.data.tag] += 1;
      return a;
    }, {} as Record<string, number>)
  ).map(([text, count]) => ({ text, count }));

export const getAllPathsOfPosts = () =>
  getAllPosts().map(({ data }) => ({
    params: { post: data.title },
  }));

export const getAllPostsByTag = (tag: string) =>
  getAllPosts().filter(({ data }) => data.tag === tag);

export const getPost = (title: string) =>
  getAllPosts().find(({ data }) => title === data.title);
