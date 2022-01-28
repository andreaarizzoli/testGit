import { FC } from "react";
import styled from "styled-components";
import { Comment } from "../comment.slice";
import { useToggle } from "./useToggle";

export const Card = styled.div`
  box-shadow: rgb(209 209 213) 0px 5px 15px;
  transition: 0.3s;
  border-radius: 4px;
  width: 40%;
  margin-bottom: 30px;
  padding-top: 30px;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 50px auto;
  }
`;

export const Text = styled.h4`
  font-weight: normal;
  margin: 10px 40px;
`;

export const TextBold = styled(Text)`
  font-weight: bold;
`;

export const TextBody = styled(Text)`
  margin-top: 20px;
`;

export const ButtonCard = styled.button`
  background: white;
  color: #008cba;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #008cba;
  border-radius: 3px;
  transition-duration: 0.4s;

  &:hover {
    background: #008cba;
    color: white;
  }
`;

type CommentItemProps = {
  comment: Comment;
};

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  //const [showBody, setShowBody] = useState(false);
  //const handleButtonClick = () => {
  //  setShowBody(!showBody);
  //};
  const { open: showBody, toggle: handleButtonClick } = useToggle();

  return (
    <Card>
      <img
        src={`https://source.unsplash.com/random/200x200?sig=1${comment.id}`}
        alt={`Comment-Img-${comment.id}`}
      />
      <TextBold>{comment.name}</TextBold>
      <Text>{comment.email}</Text>
      {showBody && <TextBody>{comment.body}</TextBody>}
      <ButtonCard onClick={handleButtonClick}>
        {showBody ? "Mostra di meno" : "Mostra di più"}
      </ButtonCard>
    </Card>
  );
};

export default CommentItem;
