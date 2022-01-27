import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Album,
  albumsActions,
  AlbumSelector,
  hasAlbumErrorSelector,
  isAlbumsLoadingSelector,
} from "../albums.slice";
import styled from 'styled-components';

export const Albums = () => {
  const loading = useSelector(isAlbumsLoadingSelector);
  const hasError = useSelector(hasAlbumErrorSelector);
  const albumData = useSelector(AlbumSelector);
  const dispatch = useDispatch();

 const Cardcontainer= styled.div`
 display:flex;
 justify-content:space-around;
 flex-wrap:wrap;
 with:calc (100% / 2);

 `;

  const Card = styled.div`
  padding:20px;
  border 2px solid black;
  border-radius:10px;
  color:red;
  with:calc (100% / 2);
  
  `;


  useEffect(() => {
    dispatch(albumsActions.fetchAlbums());
  },[dispatch]);


  if (loading) {
    return <h1>LOADING</h1>;
  }
  if (hasError) {
    return <h1>Pagina di errore</h1>;
  }else{

  return <Cardcontainer> 
        {
            albumData.map(
                (album:Album)=>{
                    return(
                        <Card>
                            <h6>{album.userId}</h6>
                            <h5>{album.title}</h5>
                        </Card>
                    )

                }
            )
        }
        </Cardcontainer>
};
}
