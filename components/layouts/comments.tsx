import { useEffect, useRef } from "react";

const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $utterances = document.createElement("script") as HTMLScriptElement;
    $utterances.src = "https://utteranc.es/client.js";
    $utterances.async = true;
    $utterances.crossOrigin = "anonymous";
    $utterances.setAttribute("issue-term", "pathname");
    $utterances.setAttribute("repo", "nakzyu/blog-comments");
    $utterances.setAttribute("theme", "github-light");

    if (commentsRef.current) commentsRef.current.appendChild($utterances);
  }, [commentsRef]);

  return <div ref={commentsRef} />;
};

export default Comments;