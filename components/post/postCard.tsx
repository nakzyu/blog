import Link from "next/link";
import { PostMetadata } from "../../types";
import Tag from "../tag/tag";
import TimeToolTip from "./timeToolTip";

type PostCardProps = {
  data: PostMetadata;
};

const PostCard = ({ data }: PostCardProps) => {
  return (
    <div className="mb-8">
      {data.thumbnail && (
        <Link href={`/${data.fileName}`} passHref>
          <img
            className="cursor-pointer object-cover w-full h-64 md:h-96 "
            src={`/images/${data.thumbnail || "logo.png"}`}
            alt="image"
          />
        </Link>
      )}
      <Link href={`/${data.fileName}`} passHref>
        <h2 className="cursor-pointer text-xl my-4 md:text-2xl">
          {data.title}
        </h2>
      </Link>

      <div className="flex">
        <Tag text={data.tag} isSelected={false} isVertical={true} />
        <TimeToolTip publishedDate={data.publishedDate} />
      </div>
    </div>
  );
};

export default PostCard;
