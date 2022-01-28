import { FC, useState } from "react";
import { Post } from "../posts.slice";
import { Card, CardBody, CardTitle, CardImg, CardButton } from "./StyledCard";
import styled, { css } from "styled-components";

//Creo lo styled component per il p che compare al click
export const CardParagraph = styled.p<{ collapse: boolean }>`
  color: #274072;
    ${(props) =>
      props.collapse
        ? css`
            display: block;
          `
        : css`
            display: none;
          `};
`;
//display: ${({ collapse }) => (collapse ? "block" : "none")};

export type PostProps = {
  post: Post;
};

export const CardPost: FC<PostProps> = ({ post: { id, title, body } }) => {
  const [collapse, setCollapse] = useState(false);
 // console.log(collapse);

  return (
    <Card key={id}>
      <CardImg
        src="https://image.freepik.com/free-vector/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg"
        alt="writer working"
      ></CardImg>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardButton onClick={() => setCollapse(!collapse)}>
          Read more
        </CardButton>
        <CardParagraph collapse={collapse}>{body}</CardParagraph>
      </CardBody>
    </Card>
  );
};

//{ collapse && <CardParagraph>{body}</CardParagraph>}
//Si può usare anche questa sintassi, in questo modo si può evitare di usare i props: togliere collapse da CardParagraph in return e anche il css dal componente a riga 9