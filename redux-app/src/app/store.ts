import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import todoSlice from "../features/todos/todos.slice";

export const store = configureStore({
    reducer: {
      todos: todoSlice.reducer,
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
  