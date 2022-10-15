import { Post } from "../../types";
import MarkdownRenderer from "../markdownRenderer";

const PostBody = ({ content }: Post) => <MarkdownRenderer content={content} />;

export default PostBody;
