import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hasPostsErrorSelector,
  isPostsLoadingSelector,
  postsActions,
  postsDataSelector,
} from "../posts.slice";

export const PostsList = () => {
  const dispatch = useDispatch();

  const loading = useSelector(isPostsLoadingSelector);
  const hasError = useSelector(hasPostsErrorSelector);
  const data = useSelector(postsDataSelector);
  const fetchData = useCallback(() => {dispatch(postsActions.fetchPosts())}, [dispatch])

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
    <div>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
