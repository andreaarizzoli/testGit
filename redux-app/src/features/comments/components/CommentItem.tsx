import { FC } from "react";
import styled from "styled-components";
import { Comment } from "../comment.slice";
import { useToggle } from "./useToggle";
import { Stack, IStackTokens } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardDetails,
  DocumentCardImage,
} from "@fluentui/react/lib/DocumentCard";
import { ImageFit } from "@fluentui/react/lib/Image";

export const Card2 = styled.div`
  box-shadow: rgb(209 209 213) 0px 5px 15px;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 50px auto;
  }
`;

const card = {
  //backgroundColor: "red",
  width: "30%",
  boxShadow: "rgb(209 209 213) 0px 5px 15px", //non me la prende
  borderRadius: "4px",
  marginBottom: "30px",
  paddingTop: "30px",
};

type CommentItemProps = {
  comment: Comment;
  children?: React.ReactNode; //è qualsiasi tag come btn, h1,
};

export const CommentItem: FC<CommentItemProps> = ({ comment, children }) => {
  //const [showBody, setShowBody] = useState(false);
  //const handleButtonClick = () => {
  //  setShowBody(!showBody);
  //};
  const { open: showBody, toggle: handleButtonClick } = useToggle();

  return (
    <DocumentCard style={card}>
      <div style={{ margin: "20px" }}>
        <DocumentCardImage
          height={200}
          imageFit={ImageFit.cover}
          imageSrc={`https://source.unsplash.com/random/200x200?sig=1${comment.id}`}
        />
      </div>
      <DocumentCardDetails>
        <DocumentCardTitle title={comment.name} />
        <DocumentCardTitle title={comment.email} showAsSecondaryTitle />
        {showBody && (
          <DocumentCardTitle title={comment.body} showAsSecondaryTitle />
        )}
      </DocumentCardDetails>
      <Stack>
        <Stack.Item align="center">
          {children}
          <PrimaryButton
            text={showBody ? "Mostra di meno" : "Mostra di più"}
            onClick={handleButtonClick}
            allowDisabledFocus
            style={{ margin: "20px 0 20px 0" }}
          />
        </Stack.Item>
      </Stack>
    </DocumentCard>
  );
};

export default CommentItem;
