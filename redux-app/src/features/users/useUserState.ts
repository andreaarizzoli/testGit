import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isUsersLoadingSelector,
  hasUsersErrorSelector,
  usersErrorSelector,
  usersDataSelector,
  usersActions,
} from "./users.slice";

export const useUserState = () => {
  const loading = useSelector(isUsersLoadingSelector);
  const hasError = useSelector(hasUsersErrorSelector);
  const error = useSelector(usersErrorSelector);
  const data = useSelector(usersDataSelector);
  const dispatch = useDispatch();

  const fetchUsers = useCallback(() => {
    dispatch(usersActions.fetchUsers());
  }, [dispatch]);

  return { data, loading, hasError, error, fetchUsers };
};
