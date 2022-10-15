import ReactMarkdown from "react-markdown";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import gfm from "remark-gfm";
import "katex/dist/katex.min.css";
import SyntaxHighlight from "./syntaxHighlight";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      className="markdown-body mt-10 md:mt-12 min-h-[25vh] text-[#c9d1d9] "
      remarkPlugins={[remarkMath, gfm]}
      rehypePlugins={[rehypeKatex]}
      components={SyntaxHighlight}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
