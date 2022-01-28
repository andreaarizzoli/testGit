import { useCallback, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import {
//  hasPostsErrorSelector,
//  isPostsLoadingSelector,
//  postsActions,
//  postsDataSelector,
//} from "../posts.slice";
import styled from "styled-components";
import { CardPost } from "./Card";
import { usePostState } from "./usePostState";

//Div per disporre le card
const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding-top: 3rem;
`;

export const PostsList = () => {
  const { fetchPost, hasError, data, loading } = usePostState();

  //const dispatch = useDispatch();
  //const loading = useSelector(isPostsLoadingSelector);
  //const hasError = useSelector(hasPostsErrorSelector);
  //const data = useSelector(postsDataSelector);

  const fetchData = useCallback(() => {
    fetchPost(); //dispatch(postsActions.fetchPosts());
  }, [fetchPost]); // [dispatch]

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div>
        <h1>Loading content...</h1>
      </div>
    );
  }

  if (hasError) {
    <div>
      <h1>Error!</h1>
      <button onClick={fetchData}>Retry</button>
    </div>;
  }

  return (
    <Div>
      {data.map((post: any) => {
        return <CardPost key={post.id} post={post}></CardPost>;
      })}
    </Div>
  );
};
