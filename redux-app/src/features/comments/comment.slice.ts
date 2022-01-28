import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type CommentTypeSlice = {
  data: Comment[];
  loading: boolean;
  error: string;
};

const initialState: CommentTypeSlice = {
  data: [],
  loading: false,
  error: "",
};

const fetchComments = createAsyncThunk("fetchComments", async (_, thunkAPI) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=20"
    );
    const data = await response.json();
    //console.log(data)
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Errore caricametno dati");
  }
});

export const commentSlice = createSlice({
  initialState,
  name: "@comments",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchComments.rejected, (state) => {
        state.loading = false;
        state.error = "Errore caricamento commenti";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

const commentStateSelector = (state: RootState) => state.comments;
export const isCommentLoadingSelector = createSelector(
  commentStateSelector,
  (state) => state.loading
);
export const hasCommentErrorSelector = createSelector(
  commentStateSelector,
  (state) => !!state.error
);
export const commentDataSelector = createSelector(
  commentStateSelector,
  (state) => state.data
);

//export const commentActions = {...commentSlice, fetchComments};
export const commentActions = { ...commentSlice.actions, fetchComments };
