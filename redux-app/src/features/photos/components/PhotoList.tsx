import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Photo
} from "../photos.slice";
import { PhotoItem } from "./PhotoItem";
import { usePhotoSlice } from "./utilities/usePhotoSlice";

const PhotoList = () => {
  const { data, loading, hasError, PhotoAct } = usePhotoSlice();

  useEffect(() => {
    PhotoAct();
  }, [PhotoAct]);

  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

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
    <CardContainer>
      {data.map((photo: Photo) => {
        return <PhotoItem key={photo.id} photo={photo}></PhotoItem>;
      })}
    </CardContainer>
  );
};

export default PhotoList;
