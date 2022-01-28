import { useEffect } from "react";
import styled from "styled-components";
import { useCommentState } from "../useCommentState";
import CommentItem from "./CommentItem";

export const CommentsList = () => {
  //const dispatch = useDispatch();
  //const status = useSelector(isCommentLoadingSelector);
  //const error = useSelector(hasCommentErrorSelector);
  //const data = useSelector(commentDataSelector);
  //const fetchData = useCallback(() => {
  //  dispatch(commentActions.fetchComments());
  //}, [dispatch]);
  const { data, status, error, fetchData } = useCommentState();

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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  return (
    <div>
      <h1>Lista dei commenti:</h1>
      <br />
      <Conteiner>
        {data.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}
      </Conteiner>
    </div>
  );
};

export default CommentsList;
