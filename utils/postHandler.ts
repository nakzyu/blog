import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/post";

const root = process.cwd();

export const getPaths = () => {
  const postsDir = path.join(root + "/posts/");

  const paths = fs.readdirSync(postsDir).map((category) => ({
    params: {
      category,
    },
  }));
  return paths;
};

export const getPost = (fileName: string): Post => {};
