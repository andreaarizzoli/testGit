import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import todoSlice from "../features/todos/todos.slice";
import AlbumsSlice from "../features/albums/albums.slice"

export const store = configureStore({
    reducer: {
      todos:todoSlice.reducer,
      album: AlbumsSlice.reducer

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
  