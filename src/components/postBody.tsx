import React, { useState } from "react";
import PostType from "../../public/types/postType";
import ReactMarkdown from "react-markdown";

const PostBody: React.FC<PostType> = ({ data, content }): JSX.Element => {
  const [text] = useState(content);
  return <ReactMarkdown className='markdown-body'>{text}</ReactMarkdown>;
};
export default PostBody;
