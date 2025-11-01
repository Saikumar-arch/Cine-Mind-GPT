import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name : "nowPlayingMovies",
        initialState: {
            nowPlayingMovies: null
        },
        reducers:{
            AddNowPlayingMovies:(state, action)=>{
                state.nowPlayingMovies = action.payload;
            }
        }
    }
)


export const {AddNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;

