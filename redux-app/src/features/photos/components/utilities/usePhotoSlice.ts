import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPhotoSelector, hasPhotoErrorSelector, isPhotoLoadingSelector, photoAction } from "../../photos.slice";

export const usePhotoSlice = () => {
    const dispatch = useDispatch();

    const loading = useSelector(isPhotoLoadingSelector);
    const hasError = useSelector(hasPhotoErrorSelector);
    const data = useSelector(dataPhotoSelector);
  
    const PhotoAct = useCallback(()=> {
        dispatch(photoAction.fetchPhotos());
    },[dispatch]);
    
    

    return { loading, hasError, data, PhotoAct };
}