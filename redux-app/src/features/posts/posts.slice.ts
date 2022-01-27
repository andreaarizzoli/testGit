import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

//Definisco il tipo di dato
export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

//Definisco il tipo dello stato
export type PostsState = {
    loading: boolean,
    error: string,
    data: Post[],
};

//Inizializzo
const initialState: PostsState = {
    data:[],
    error: '',
    loading: false,
};


const fetchPosts = createAsyncThunk('fetchPosts', async (_, thunkApi) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue('Error fecthing posts')
    }
});

const postsSlice = createSlice({
    initialState,
    name: "@posts",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true;
            state.error = ""; //Resetto errore
        }); builder.addCase(fetchPosts.rejected, state => {
            state.loading = false;
            state.error = "Error loading posts";
        }); builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
    }
});

const postsStateSelector = (state: RootState) => state.posts;

export const isPostsLoadingSelector = createSelector(postsStateSelector, state => state.loading);

export const hasPostsErrorSelector = createSelector(postsStateSelector, state => !!state.error); //Con !! converto string in boolean

export const postsErrorSelector = createSelector(postsStateSelector, state => state.error);

export const postsDataSelector = createSelector(postsStateSelector, state => state.data);


export const postsActions = {...postsSlice.actions, fetchPosts};
export default postsSlice;



