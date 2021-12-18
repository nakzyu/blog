export type Post = {
  data: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  description: string;
  publishedDate: string;
  category: string;
  thumbnail?: string;
};
