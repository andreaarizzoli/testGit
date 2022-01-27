import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataPhotoSelector,
  hasPhotoErrorSelector,
  isPhotoLoadingSelector,
  Photo,
  photoAction,
} from "../photos.slice";
import styled from "styled-components";
import { PhotoItem } from "./PhotoItem";

const PhotoList = () => {
  const dispatch = useDispatch();

  const loading = useSelector(isPhotoLoadingSelector);
  const hasError = useSelector(hasPhotoErrorSelector);
  const data = useSelector(dataPhotoSelector);

  
  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;


  useEffect(() => {
    dispatch(photoAction.fetchPhotos());
  }, [dispatch]);

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
      {data.map(
                (photo: Photo) => {
                    return <PhotoItem key={photo.id} photo={photo} ></PhotoItem>
                }
            )
      }
    </CardContainer>
  );
};

export default PhotoList;
