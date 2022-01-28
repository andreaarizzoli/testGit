import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"


export type Album = {
    userId: number,
    id: number,
    title: string,
}

type  AlbumSliceType={
    data: Album[],
    loading: boolean, //nel caso in qui facciamo chiamate al server le gestiamo con loading ed error
    error: string
}


const initialState: AlbumSliceType = {
    data: [], 
    loading: false,
    error: ""
}

const fetchAlbums = createAsyncThunk('fetchAlbums', async ( _ , thunkAPI)=>{
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data= await response.json();
    return data;
    } catch(e){
        return thunkAPI.rejectWithValue("Non riesco a recuperare i tuopi Album")
    }
})

const AlbumsSlice = createSlice({
    initialState,
    name:'@albums',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending,(state)=>{
            state.loading=true;
            state.error=''
        })
        builder.addCase(fetchAlbums.rejected,(state)=>{
            state.loading=false;
            state.error="ERRORE AVVIAMENTO"
        })
        builder.addCase(fetchAlbums.fulfilled,(state:any , action)=>{
            state.loading=false;
            state.data=action.payload
        })

    }
})

const albumStateSelector = (state: RootState) => state.album;

export const isAlbumsLoadingSelector= createSelector(albumStateSelector,state=> state.loading);
export const hasAlbumErrorSelector= createSelector(albumStateSelector,state=>!!state.error);
export const albumErrorSelector= createSelector(albumStateSelector,state=>state.error);
export const AlbumSelector= createSelector(albumStateSelector,state=>state.data);
export const albumsActions ={...AlbumsSlice.actions, fetchAlbums}
export default AlbumsSlice; 