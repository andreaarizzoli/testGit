import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    commentActions,
    commentDataSelector,
    hasCommentErrorSelector,
    isCommentLoadingSelector
} from "../comment.slice";

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

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Lista dei commenti:</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <thead>
          {data.map((c) => {
            return (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.postId}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.body}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default CommentsList;
