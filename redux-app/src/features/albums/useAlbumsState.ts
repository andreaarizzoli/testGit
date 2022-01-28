import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    albumsActions,
    AlbumSelector,
    hasAlbumErrorSelector,
    isAlbumsLoadingSelector
} from "./albums.slice";



export const useAlbumState =()=>{
    
    const loading = useSelector(isAlbumsLoadingSelector);
    const hasError = useSelector(hasAlbumErrorSelector);
    const albumData = useSelector(AlbumSelector);
    const dispatch= useDispatch();

    const fetchAlbums = useCallback(()=>{
        dispatch(albumsActions.fetchAlbums());
        },[dispatch]);

    return{fetchAlbums, loading, hasError, albumData}

}