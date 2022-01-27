import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { photoSlice } from "../features/photos/photos.slice";
import todoSlice from "../features/todos/todos.slice";

export const store = configureStore({
    reducer: {
      todos: todoSlice.reducer,
      photos: photoSlice.reducer,
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
  