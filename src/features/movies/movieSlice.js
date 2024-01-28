import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movie/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)
    return response.data;
})

const initialState = {
    movie: {},
    shows: {},
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, () => {
                console.log('Pending');
            })

            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                console.log('fetch successfully')
                // return { ...state, movies: payload }
                state.movie = action.payload
            })
            .addCase(fetchAsyncMovies.rejected, () => {
                console.log('rejected');
            })
            .addCase(fetchAsyncShows.fulfilled, (state, action) => {
                console.log('fetch successfully')
                // return { ...state, movies: payload }
                state.shows = action.payload
            })
            .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
                console.log('fetch successfully')
                // return { ...state, movies: payload }
                state.selectMovieOrShow = action.payload
            })
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movie
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;