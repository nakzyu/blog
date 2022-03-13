import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";

const SyntaxHighlight: object = {
  code({
    inline,
    className,
    ...props
  }: {
    inline: boolean;
    className: string;
  }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={theme}
        language={match[1]}
        PreTag='div'
        className='codeStyle'
        showLineNumbers={true}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default SyntaxHighlight as object;
