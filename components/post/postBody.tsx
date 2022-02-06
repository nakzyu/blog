import { Post } from "../../types/post";
import ReactMarkdown from "react-markdown";

const PostBody = ({ content }: Post) => {
  return (
    <ReactMarkdown className='reactMarkDown mt-10 md:mt-12'>
      {content}
    </ReactMarkdown>
  );
};

export default PostBody;
