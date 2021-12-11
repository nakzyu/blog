import fs, { readFileSync } from "fs";
import path from "path";
import { Post, PostMetadata } from "../types/post";
import matter from "gray-matter";

const root = process.cwd();
const postsDir = path.join(root + "/posts/");

const getAllPosts = (dir: string) =>
  fs
    .readdirSync(dir)
    .map((fileName) => matter(readFileSync(dir + fileName, "utf-8")))
    .map(
      (post) =>
        ({
          content: post.content,
          data: post.data,
        } as Post)
    );

export const getPaths = () => {
  const categorySet = new Set<string>();
  getAllPosts(postsDir).forEach((post) =>
    categorySet.add((post.data as PostMetadata).category)
  );
  const categoryPaths = Array.from(categorySet).map((category) => ({
    params: { category },
  }));
  return categoryPaths;
};

export const getAllPostsByCategory = (category: string) =>
  getAllPosts(postsDir).filter(({ data }) => data.category === category);

export const getPost = (title: string) =>
  getAllPosts(postsDir).find(({ data }) => title === data.title);
