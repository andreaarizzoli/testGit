import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    Album,
    albumsActions,
    AlbumSelector,
    hasAlbumErrorSelector,
    isAlbumsLoadingSelector
} from "../albums.slice";
import { Card } from "./Card";
import { useAlbumState } from "../useAlbumsState";



export const Albums = () => {

  const { fetchAlbums, loading, hasError, albumData } = useAlbumState();

  const Cardcontainer = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 60%;

    @media (max-width: 820px) {
      width: 90%;
      margin: 0 5% 30px 5%;
    }
  `;

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  
  if (loading) {
    return <h1>LOADING</h1>;
  }
  if (hasError) {
    return <h1>Pagina di errore</h1>;
  } else {
    return (
      <Cardcontainer>
        {albumData.map(
            (album: Album) => {
                    return <Card key={album.id} album={album}></Card>
                }
            )
        }
      </Cardcontainer>
    );
  }
};
