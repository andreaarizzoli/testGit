import styled, { css } from "styled-components";

export const Card = styled.div`
  background: white;
  width: 20rem;
  margin-bottom: 3rem;
  border-radius: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  overflow: hidden;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    width: 20.5rem;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  padding-top: 1em;
`;

export const CardBody = styled.div`
  padding: 0px 30px 30px 30px;
`;

export const CardTitle = styled.h2`
  color: #8ea0f0;
`;

/* export const CardParagraph = styled.p<{ collapse: boolean }>`
  color: #274072;
  ${(props) =>
    props.collapse
      ? css`
          display: none;
        `
      : css`
         display: visible;
        `};
`; */

export const CardButton = styled.button`
  background: #ee8739;
  color: #274072;
  border: none;
  border-radius: 10px;
  padding: 10px 30px 10px 30px;
  font-weight: bold;
  :hover {
    background: #274072;
    color: #ee8739;
  }

  ${(props: any) =>
    props.primary &&
    css`
      background: #274072;
      color: #ee8739;
    `}
`;



//#8ea0f0
//#ee9d62




