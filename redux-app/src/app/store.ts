import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { commentSlice } from "../features/comments/comment.slice";
import { photoSlice } from "../features/photos/photos.slice";
import todoSlice from "../features/todos/todos.slice";
import usersSlice from "../features/users/users.slice";

export const store = configureStore({
    reducer: {
      todos: todoSlice.reducer,
      comments: commentSlice.reducer,
      photos: photoSlice.reducer,
      users: usersSlice.reducer
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>; //tipo dello store che stiamo utilizzando
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    any
  >;
  