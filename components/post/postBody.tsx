import { Post } from "../../types/post";
import MarkdownRenderer from "../markdownRenderer";

const PostBody = ({ content }: Post) => <MarkdownRenderer content={content} />;

export default PostBody;
