import { FC } from "react";
import styled from "styled-components";
import { Comment } from "../comment.slice";
import { useState } from "react";

type CommentItemProps = {
  comment: Comment;
};

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {

    const [showBody, setShowBody] = useState(false);

    const handleButtonClick = () => {
      setShowBody(!showBody);
    }
  
    const Card = styled.div`
    box-shadow: rgb(209 209 213) 0px 5px 15px;
    transition: 0.3s;
    border-radius: 4px;
    float: left;
    width: 90%;
    margin: 0 5% 50px 5%;
    padding: 30px 0 0 0;

    @media (min-width: 768px) {
        width: 40%;
        margin: 0 5% 30px 5%;
    }

  `;

  const Text = styled.h4`
    color: black;
    font-weight: normal;
    margin: 10px 50px;
  `;
  const TextBold = styled(Text)`
    font-weight: bold;
  `;

  const TextBody = styled(Text)`
  display: ${showBody ? "blockS" : "none"};
  margin-top: 20px;
`;

  const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  return (
    <div style={{ width: "100%" }}>
      <Card>
        <img
          src={`https://source.unsplash.com/random/200x200?sig=1${comment.id}`}
          alt={`Comment-Img-${comment.id}`}
        />
        <TextBold>{comment.name}</TextBold>
        <Text>Post: {comment.postId}</Text>
        <Text>Email: {comment.email}</Text>
        <TextBody>{comment.body}</TextBody>
        <br />
        <Button onClick={handleButtonClick}>{showBody ? "Mostra di meno" :  "Mostra di più"}</Button>
      </Card>
    </div>
  );
};

export default CommentItem;
