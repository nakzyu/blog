export type Post = {
  data: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  publishedDate: string;
  tag: string;
  thumbnail?: string;
};
