import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isUsersLoadingSelector,
  hasUsersErrorSelector,
  usersErrorSelector,
  usersDataSelector,
  usersActions,
} from "../users.slice";

export const UsersList = () => {
  const loading = useSelector(isUsersLoadingSelector);
  const hasError = useSelector(hasUsersErrorSelector);
  const error = useSelector(usersErrorSelector);
  const data = useSelector(usersDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (hasError) {
    return <div>{error}</div>;
  }

  return (
    <table style={{width: "100%"}}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.address.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
