import {
    createAsyncThunk,
    createSelector,
    createSlice
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Photo = {
  // definisco il dato con cui andrò a lavorare
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type PhotoSliceType = {
  //tipo dato iniziale
  data: Photo[];
  loading: boolean;
  error: string;
};

const initialState: PhotoSliceType = {
  data: [], //
  loading: false,
  error: "",
};

const fetchPhotos = createAsyncThunk("fetchPhotos", async (_, thunkApi) => {
  try {
    //gestisco l'errore
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=5" //<-- _limit limita l'array in base al numero selezionato
    );
    const data = await response.json();

    return data;
  } catch (e) {
    return thunkApi.rejectWithValue("error");
  }
});

export const photoSlice = createSlice({
  name: "@photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = ""; //resettare l'errore
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.loading = false;
        state.error = "Errore Caricamento";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

//creo i selector --> i selector servono per accedere agli stati di redux
const photoStateSelector = (state: RootState) => state.photos; //recupera una porzione dello state

export const isPhotoLoadingSelector = createSelector(
  photoStateSelector,
  (state) => state.loading
);

export const hasPhotoErrorSelector = createSelector(
  photoStateSelector,
  (state) => !!state.error
);

export const photoErrorSelector = createSelector(
  photoStateSelector,
  (state) => state.error
);

export const dataPhotoSelector = createSelector(
  photoStateSelector,
  (state) => state.data
);

export const photoAction = { ...photoSlice.actions, fetchPhotos };

export default photoSlice;
