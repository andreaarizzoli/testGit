import React, { FC, useState } from "react";
import styled from "styled-components";
import { Album } from "../albums.slice";

export type CardProps = {
  album: Album
};

export const Card : FC<CardProps> = ({
  album: {userId,title}
  
}) => {

    const Carditem = styled.div`
    border-radius: 10px;
    width: 30%;
    margin: 20px;
    box-shadow: 8px 8px 14px -6px rgba(0, 0, 0, 0.74);

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
      background-color: rgba(255, 255, 255, 0.2);
      padding: 10px 0;
    }

    h5{
        display:none
    }
  `;


    const Button = styled.button`
      display: inline-block;
      border-radius: 5px;
      padding: 0.5rem 0;
      margin: 0.5rem 1rem;
      width: 9rem;
      background: transparent;
      color: black;
      border: 2px solid black;
      cursor: pointer;

      button:hover {
        background-color: black;
        color: white;
      }
    `;

    const [onToggle, steonToggle]=useState(false);
    const toggle = () => {
      steonToggle(onToggle)
    };
    
    
    return (
      <Carditem>
        <div className="imgcontainer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/220px-London_Big_Ben_Phone_box.jpg"
            alt=""
          />
        </div>
        <div className="Cardfooter">
          <h2>UserId: {userId}</h2>
          <h5> Title: {title}</h5>
        </div>
        <Button onClick={toggle}>Scopri</Button>
      </Carditem>
    ); 
}