import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hasPostsErrorSelector,
  isPostsLoadingSelector,
  postsActions,
  postsDataSelector,
} from "../posts.slice";

//Custom hook
export const usePostState = () => {
  const loading = useSelector(isPostsLoadingSelector);
  const hasError = useSelector(hasPostsErrorSelector);
  const data = useSelector(postsDataSelector);
  const dispatch = useDispatch();

  const fetchPost = useCallback(() => {
    dispatch(postsActions.fetchPosts());
  }, [dispatch]); //Action, dipendenza è dispatch

  return { loading, hasError, data, fetchPost };
};
