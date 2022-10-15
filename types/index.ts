export type TagTypes = "React" | "All";

export type Post = {
  data: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  publishedDate: string;
  tag: TagTypes;
  thumbnail?: string;
};
export type TagFreq = {
  text: TagTypes;
  count: number;
};
