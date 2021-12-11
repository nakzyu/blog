import { Post } from "../../types/post";
import ReactMarkdown from "react-markdown";

const PostBody = ({ content }: Post) => {
  return <ReactMarkdown className='markdown-body'>{content}</ReactMarkdown>;
};

export default PostBody;
