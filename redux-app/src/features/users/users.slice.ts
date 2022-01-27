import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Geo = {
  lat: number;
  lng: number;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

type UsersSliceType = {
  data: User[];
  loading: boolean;
  error: string;
};

const initialState: UsersSliceType = {
  data: [],
  loading: false,
  error: "",
};

const fetchUsers = createAsyncThunk("fetchUsers", async (_, thunkApi) => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue("Errore nel recuperare gli utenti");
  }
});

const usersSlice = createSlice({
  name: "@users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Errore nel caricamento degli utenti";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

const usersStateSelector = (state: RootState) => state.users;

export const isUsersLoadingSelector = createSelector(
  usersStateSelector,
  (state) => state.loading
);

export const hasUsersErrorSelector = createSelector(
  usersStateSelector,
  (state) => !!state.error
);

export const usersErrorSelector = createSelector(
  usersStateSelector,
  (state) => state.error
);

export const usersDataSelector = createSelector(
  usersStateSelector,
  (state) => state.data
);

export const usersActions = { ...usersSlice.actions, fetchUsers };

export default usersSlice;
