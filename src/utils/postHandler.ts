import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostType from "../../public/types/postType";

const root = process.cwd();

export const getPaths = () => {
  const postsDir = path.join(root + "/src/posts/");
  const paths = fs
    .readdirSync(postsDir)
    .map((file) => ({ params: { slug: file.split(".")[0] } }));
  return paths;
};

export const getPost = (fileName: string): PostType => {
  const postDir = path.join(root + "/src/posts/" + fileName + ".md");
  const file = fs.readFileSync(postDir, "utf-8");
  const { data, content } = matter(file);
  return { data, content };
};
