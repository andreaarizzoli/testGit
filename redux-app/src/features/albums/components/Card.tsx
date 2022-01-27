import React, { FC, useState } from "react";
import styled from "styled-components";
import { Album } from "../albums.slice";

export type CardProps = {
  album: Album
};

export const Card : FC<CardProps> = ({
  album: {userId,title}
  
}) => {

     const [onToggle, setonToggle] = useState(false);
     const toggle = () => {
       setonToggle(!onToggle);
     };
   
   
    const Carditem = styled.div`
      border-radius: 10px;
      width: 40%;
      margin: 20px;
      box-shadow: 8px 8px 14px -6px rgba(0, 0, 0, 0.74);
      background-color: #c9d0d4;

      .imgcontainer {
        height: 54%;
        border-radius: 10px;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: initial;
      }

      .Cardfooter {
        padding: 10px 0;
        display: ${onToggle ? "block" : "none"};
        transition: 0.5s;
      }

      @media (max-width: 820px) {
        width: 80%;
        margin: 0 5% 30px 5%;
      }
    `;


    const Button = styled.button`
      display: inline-block;
      border-radius: 5px;
      padding: 0.5rem 0;
      margin: 0.5rem 1rem;
      width: 9rem;
      background: #068de6;
      color: white;
      border: 2px solid white;
      cursor: pointer;

      :hover {
        transition: .5s;
        background-color: white;
        color: #068de6;
        border: 2px solid #068de6;
      }
    `;

   
    
    
    return (
      <Carditem>
        <div className="imgcontainer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/220px-London_Big_Ben_Phone_box.jpg"
            alt=""
          />
        </div>
          <h2>UserId: {userId}</h2>
        <div className="Cardfooter">
          <h5> Title</h5>
          <p>{title}</p>
        </div>
        <Button onClick={toggle}>{onToggle ? 'Vedi Meno' : 'Vedi Dettagli'}</Button>
      </Carditem>
    ); 
}