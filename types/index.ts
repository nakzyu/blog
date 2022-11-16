import { TagColors } from "../constants";

export type Post = {
  data: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  publishedDate: string;
  tag: TagTypes;
  fileName: string;
  thumbnail?: string;
};
export type TagFreq = {
  text: TagTypes;
  count: number;
};

export type TagTypes = keyof typeof TagColors;
