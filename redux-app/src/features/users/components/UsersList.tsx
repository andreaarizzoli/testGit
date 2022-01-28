import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isUsersLoadingSelector,
  hasUsersErrorSelector,
  usersErrorSelector,
  usersDataSelector,
  usersActions,
} from "../users.slice";

import styled from "styled-components";
import { ManuCard } from "./ManuCard";

const ManuCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

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
    <ManuCardContainer>
      {data.map((el) => {
        return <ManuCard user={el} key={el.id}></ManuCard>;
      })}
    </ManuCardContainer>
  );
};
