export type Post = {
  data: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  description: string;
  publishedDate: string;
  tag: string;
  thumbnail?: string;
};
