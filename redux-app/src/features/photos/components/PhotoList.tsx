import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataPhotoSelector,
  hasPhotoErrorSelector,
  isPhotoLoadingSelector,
  photoAction,
} from "../photos.slice";
import styled from "styled-components";

const PhotoList = () => {
  const dispatch = useDispatch();

  const loading = useSelector(isPhotoLoadingSelector);
  const hasError = useSelector(hasPhotoErrorSelector);
  const data = useSelector(dataPhotoSelector);

  const List = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    padding: 0;
  `;

  const Title = styled.li`
    font-size: 20px;
    background-color: lightgray;
    text-transform: uppercase;
    padding: 10px;
  `;

  const Data = styled.li`
    border: 1px solid black;
    padding: 10px;
    width: calc(100% / 5);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const DataThum = styled.li`
    border: 1px solid black;
    padding: 10px;
    width: calc(100% / 5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x : scroll;
    color: blue;
  `;


  useEffect(() => {
    dispatch(photoAction.fetchPhotos());
  }, [dispatch]);

  console.log(loading);
  console.log(hasError);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return (
      <div>
        Error...
        <br />
        <button onClick={() => {}}>Retry</button>
      </div>
    );
  }
  return (
    <div style={{'padding': '0', 'margin': '0', 'boxSizing': 'border-box'}}>
      <List>
        <Title>Album Id</Title>
        <Title>Id</Title>
        <Title>thumbnailUrl</Title>
        <Title>title</Title>
        <Title>Image</Title>
      </List>

      {data.map((el) => {
        return (
          <List>
            <Data>{el.albumId}</Data>
            <Data>{el.id}</Data>
            <DataThum>{el.thumbnailUrl}</DataThum>
            <Data>{el.title}</Data>
            <Data>
              <img style={{ width: "200px" }} src={el.url} alt="images" />
            </Data>
          </List>
        );
      })}
    </div>
  );
};

export default PhotoList;
