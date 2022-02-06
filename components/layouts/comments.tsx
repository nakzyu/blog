import { useEffect, useRef } from "react";

const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $utterance = document.createElement("script") as HTMLScriptElement;

    $utterance.src = "https://utteranc.es/client.js";
    $utterance.crossOrigin = "anonymous";
    $utterance.async = true;

    $utterance.setAttribute("issue-term", "pathname");
    $utterance.setAttribute("repo", "nakzyu/blog-comments");
    $utterance.setAttribute("theme", "github-light");

    commentsRef.current?.appendChild($utterance);
  }, []);

  return <div ref={commentsRef}></div>;
};

export default Comments;
