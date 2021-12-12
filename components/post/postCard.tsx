import Image from "next/image";
import { PostMetadata } from "../../types/post";

type PostCardProps = {
  data: PostMetadata;
};

const PostCard = ({ data }: PostCardProps) => {
  return (
    <>
      <Image src='/images/profile.jpg' alt='image' width='100' height='100' />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div>{data.publishedDate}</div>
    </>
  );
};

export default PostCard;
