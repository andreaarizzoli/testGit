import { useState } from "react";
import styled, { css } from "styled-components";

const ManuCardWrapper = styled.div`
  padding: 0 0 32px;
  margin: 50px;
  flex: 1 0 40%;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const ManuCardHead = styled.div`
  padding:16px 0
`;

const ManuCardTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ManuCardImg = styled.img`
  width: 40%;
  margin: 0 auto;
`;

const ManuCardButton = styled.button`
  display: block;
  width: 60%;
  margin: 0 auto;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const ManuCardBody = styled.div`
  padding: 0 32px;
`;

const ManuCardParagraph = styled.p`
  font-size: 1em;
  color: black;
`;

const ManuHideCardBody = styled(ManuCardBody)<{ show: boolean }>`
  transition: all 0.3s;
  ${(props) =>
    props.show
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`;

export const ManuCard = (props: any) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <ManuCardWrapper>
        <ManuCardHead>
          <ManuCardTitle>{props.user.name}</ManuCardTitle>
          <ManuCardImg src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"></ManuCardImg>
        </ManuCardHead>
        <ManuCardBody>
          <ManuCardParagraph>Username: {props.user.username}</ManuCardParagraph>
          <ManuCardParagraph>Mail: {props.user.email}</ManuCardParagraph>
          <ManuCardParagraph>Tel.: {props.user.phone}</ManuCardParagraph>
          <ManuHideCardBody show={showMore}>
            <ManuCardParagraph>Site: {props.user.website}</ManuCardParagraph>
            <ManuCardParagraph>
              City: {props.user.address.city}
            </ManuCardParagraph>
            <ManuCardParagraph>
              Company: {props.user.company.name}
            </ManuCardParagraph>
          </ManuHideCardBody>
          <ManuCardButton onClick={handleClick}>
            {showMore ? "Less" : "More"}
          </ManuCardButton>
        </ManuCardBody>
      </ManuCardWrapper>
    </>
  );
};
