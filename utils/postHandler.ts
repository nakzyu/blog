import fs, { readFileSync } from "fs";
import path from "path";
import { Post } from "../types/post";
import matter from "gray-matter";
import { CategoryFreq } from "../types/categoryFreq";

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

export const getAllPathsOfCategories = () => {
  const categorySet = new Set<string>();
  getAllPosts().forEach((post) => categorySet.add(post.data.category));
  const categoryPaths = Array.from(categorySet).map((category) => ({
    params: { category },
  }));

  return categoryPaths;
};

export const getAllCategoriesAndFreqs = (): CategoryFreq[] =>
  Object.entries(
    getAllPosts().reduce((a, b) => {
      if (!a[b.data.category]) {
        a[b.data.category] = 0;
      }
      a[b.data.category] += 1;
      return a;
    }, {} as Record<string, number>)
  ).map(([text, count]) => ({ text, count }));

export const getAllPathsOfPosts = () =>
  getAllPosts().map(({ data }) => ({
    params: { post: data.title },
  }));

export const getAllPostsByCategory = (category: string) =>
  getAllPosts().filter(({ data }) => data.category === category);

export const getPost = (title: string) =>
  getAllPosts().find(({ data }) => title === data.title);
