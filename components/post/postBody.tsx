import { Post } from "../../types/post";
import MarkdownRender from "../markdownRender";

const PostBody = ({ content }: Post) => <MarkdownRender content={content} />;

export default PostBody;
