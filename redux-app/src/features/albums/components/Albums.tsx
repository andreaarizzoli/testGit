import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Album,
  albumsActions,
  AlbumSelector,
  hasAlbumErrorSelector,
  isAlbumsLoadingSelector,
} from "../albums.slice";

export const Albums = () => {
  const loading = useSelector(isAlbumsLoadingSelector);
  const hasError = useSelector(hasAlbumErrorSelector);
  const albumData = useSelector(AlbumSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(albumsActions.fetchAlbums());
  },[dispatch]);


  if (loading) {
    return <h1>LOADING</h1>;
  }
  if (hasError) {
    return <h1>Pagina di errore</h1>;
  }else{

  return <div>
      {
        albumData.map(
            (album:Album)=>{
                return(
                    <div>
                        <h6>{album.userId}</h6>
                        <h5>{album.title}</h5>
                    </div>
                )

            }
        )
      }
      </div>
};
}
