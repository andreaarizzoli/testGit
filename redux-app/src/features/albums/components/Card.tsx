import { PrimaryButton } from "@fluentui/react/lib/Button";
import {
  DocumentCard
} from "@fluentui/react/lib/DocumentCard";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { Album } from "../albums.slice";




export type CardProps = {
  album: Album,
  children?:React.ReactNode
};

export const Card: FC<CardProps> = ({
  album: {userId , title},
  children
  
}) => {

     const [onToggle, setonToggle] = useState(false);
     const toggle = () => {
       setonToggle(!onToggle);
     };

    const CardStyle = {
      borderRadius: '10px',
      border:'1px solid gray',
      width: '40%',
      margin: '20px',
      boxShadow: '8px 8px 14px -6px rgba(0, 0, 0, 0.74)',
      backgroundColor:'#c9d0d4',
    }
      
    const Imgstyle = styled.img`
        width: 100%;
        height:100%;
        border-radius: 10px;
        object-fit: initial;
      `;

const Cardfooter = {
         transition: "0.5s",
         padding: "10px 0",
         display:` ${onToggle ? "block" : "none"}`
      }

    const Mauribtn={
      marginBottom:"20px"
    }

    const Linkdiv = styled.div <StyleBTNProps>`
      color: black;
      font-size: 13px;
      a{
        color: ${(props) => props.color || "Blue"};
      }
    `;

    type StyleBTNProps = {color?:string}

    const StyledBTN = styled(PrimaryButton)`
      font-weight: bold;
      border-radius:8px;
    `;
    
   
    return (
      <DocumentCard style={CardStyle}>
        <div className="imgcontainer">
          <Imgstyle
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/220px-London_Big_Ben_Phone_box.jpg"
            alt=""
          />
        </div>

        <h2>UserId: {userId}</h2>

        <div style={Cardfooter}>
          <h3> Title:</h3>
          <p>{title}</p>
        </div>

        <StyledBTN
          text={onToggle ? "Vedi Meno" : "Vedi Dettagli"}
          onClick={toggle}
          style={Mauribtn}
        />

        <Linkdiv>{children}</Linkdiv>
      </DocumentCard>
    ); 
}