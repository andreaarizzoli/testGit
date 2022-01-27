import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { commentSlice } from "../features/comments/comment.slice";
import todoSlice from "../features/todos/todos.slice";

export const store = configureStore({
    reducer: {
      todos: todoSlice.reducer,
      comments: commentSlice.reducer
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
  