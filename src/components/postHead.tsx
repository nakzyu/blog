import styled from "styled-components";
import PostType from "../../public/types/postType";
import Title from "../styles/components/title";

const PostHead: React.FC<PostType> = ({ data, content }: PostType) => {
  return (
    <Container>
      <p>{data.category}</p>
      <Title>{data.title}</Title>
      <p>10일전</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PostHead;
