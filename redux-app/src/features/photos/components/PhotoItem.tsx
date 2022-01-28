import React, { FC, useState } from "react";
import styled from "styled-components";
import { Photo } from "../photos.slice";

export type PhotoItemProps = {
  photo: Photo;
};

export const PhotoItem: FC<PhotoItemProps> = ({
  photo: { albumId, title, id, url, thumbnailUrl },
}) => {
  const [show, setShow] = useState(false);

  const CardCol = styled.div`
    min-width: 48%;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 840px) {
      width: 100%;
    }
  `;

  const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 10px #b5bcc4;
    width: 400px;
    height: 480px;
    margin: 30px 0;
    background-image: url("https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background-og.jpg");
    background-size: cover;
    border-radius: 10px;

    @media (min-width: 300px) and (max-width: 500px) {
      width: 300px;
    }
  `;

  const Img = styled.img`
    width: 250px;
    padding: 20px 0;
    border-radius: 50%;
  `;

  const Button = styled.button`
    margin: 1em;
    padding: 0.25em 1em;
    background-color: lightgrey;
    border: 2px solid grey;
    border-radius: 3px;
    color: grey;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: black;
    }
  `;

  const Title = styled.h3`
    color: black;
    font-size: 13px;
    width: 90%;
    margin: auto;
    text-transform: uppercase;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px;
  `;

  const Details = styled.div`
    overflow-y: auto;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    width: 90%;
    margin: 15px auto;
    border-radius: 10px;

    .containerDetails {
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
        align.items: center;
    }
    
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <CardCol>
      <Card>
        <Img src={url} alt="images"></Img>
        <Title>{title}</Title>
        {show && (
          <Details>
              <div className="containerDetails">
                  <div>
                    <i className="fas fa-arrow-down"></i>
                  </div>
                  <div style={{'fontSize': '13px'}}><b>SCROLL DOWN</b></div>
                  <div>
                    <i className="fas fa-arrow-down"></i>
                  </div>
              </div>
            <p>{thumbnailUrl}</p>
          </Details>
        )}
        <Button
          onClick={(i: any) => {
            setShow(!show);
            console.log(i.target.value);
          }}
        >
          {show ? "Reduce" : "Details"}
        </Button>
        
      </Card>
    </CardCol>
  );
};
