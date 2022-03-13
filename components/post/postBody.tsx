import { Post } from "../../types/post";
import Markdown from "./markdown/markdown";

const PostBody = ({ content }: Post) => <Markdown content={content} />;

export default PostBody;
