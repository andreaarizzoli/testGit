import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isCommentLoadingSelector,
  hasCommentErrorSelector,
  commentDataSelector,
  commentActions,
} from "./comment.slice";

export const useCommentState = () => {
  const status = useSelector(isCommentLoadingSelector);
  const error = useSelector(hasCommentErrorSelector);
  const data = useSelector(commentDataSelector);
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    dispatch(commentActions.fetchComments());
  }, [dispatch]);

  return { data, status, error, fetchData };
};
