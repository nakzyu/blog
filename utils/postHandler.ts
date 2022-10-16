import fs, { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { toDate } from "./dateHandler";
import { Post, TagFreq, TagTypes } from "../types";

const root = process.cwd();
const postsDir = path.join(root + "/posts/");

export const getAllPosts = (): Post[] =>
  fs
    .readdirSync(postsDir)
    .map((fileName) => ({
      ...matter(readFileSync(postsDir + fileName, "utf-8")),
      fileName,
    }))
    .map(
      (post) =>
        ({
          content: post.content,
          data: { ...post.data, fileName: post.fileName.split(".md").join("") },
        } as Post)
    )
    .sort(
      (a, b) => +toDate(b.data.publishedDate) - +toDate(a.data.publishedDate)
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
  (
    Object.entries(
      getAllPosts().reduce((a, b) => {
        const tag = b.data.tag;

        if (!a[tag]) {
          a[tag] = 0;
        }
        a[tag] += 1;
        return a;
      }, {} as Record<TagTypes, number>)
    ) as [TagTypes, number][]
  ).map(([text, count]) => ({ text, count }));

export const getAllPathsOfPosts = () =>
  getAllPosts().map(({ data }) => ({
    params: { post: data.fileName },
  }));

export const getAllPostsByTag = (tag: string) =>
  getAllPosts().filter(({ data }) => data.tag === tag);

export const getPost = (fileName: string) =>
  getAllPosts().find(({ data }) => fileName === data.fileName);
