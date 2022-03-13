import { ReactChild } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";

const SyntaxHighlight: object = {
  code({
    inline,
    className,
    children,
    ...props
  }: {
    inline: boolean;
    className: string;
    children: string[];
  }) {
    console.log(children);
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={theme}
        language={match[1]}
        PreTag='div'
        className='codeStyle'
        showLineNumbers={true}
        {...props}
      >
        {children[0].slice(0, children[0].length - 1)}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default SyntaxHighlight;
