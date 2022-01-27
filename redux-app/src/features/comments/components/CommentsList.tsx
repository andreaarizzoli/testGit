import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    commentActions,
    commentDataSelector,
    hasCommentErrorSelector,
    isCommentLoadingSelector
} from "../comment.slice";
import CommentItem from "./CommentItem";

export const CommentsList = () => {
  const dispatch = useDispatch();
  const status = useSelector(isCommentLoadingSelector);
  const error = useSelector(hasCommentErrorSelector);
  const data = useSelector(commentDataSelector);

  const fetchData = useCallback(() => {
    dispatch(commentActions.fetchComments());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (status) {
    <div>Caricamento dei commenti</div>;
  }
  if (error) {
    <div>
      Errore
      <button onClick={() => fetchData()}>Carica dati</button>
    </div>;
  }

  const Conteiner = styled.div`
  display: flex;
  margin: 0 -5px;
  align-items: stretch;
  justify-content: center;
  `
 
 

  return (
    <div>
      <Conteiner>
      </Conteiner>
      <h1>Lista dei commenti:</h1>
      {
        data.map(
          (comment) => {
          return <CommentItem key={comment.id} comment={comment}/>
        })
      }
    </div>
  );
};

export default CommentsList;
