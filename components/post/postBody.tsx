import React, { useState } from "react";
import { Post } from "../../types/post";
import ReactMarkdown from "react-markdown";

export default function PostBody({ data, content }: Post) {
  return <ReactMarkdown className='markdown-body'>{content}</ReactMarkdown>;
}
