import { Post } from "../../types/post";
import ReactMarkdown from "react-markdown";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import gfm from "remark-gfm";

import "katex/dist/katex.min.css";
import SyntaxHighlight from "./markdown/syntaxHighlight";

const PostBody = ({ content }: Post) => {
  return (
    <ReactMarkdown
      className='markdown-body mt-10 md:mt-12 min-h-[25vh] text-[#c9d1d9] '
      remarkPlugins={[remarkMath, gfm]}
      rehypePlugins={[rehypeKatex]}
      components={SyntaxHighlight}
    >
      {content}
    </ReactMarkdown>
  );
};

export default PostBody;
