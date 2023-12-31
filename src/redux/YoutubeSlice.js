import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDataFromApi } from '../Api/YoutubeApi'

export const fetchSelectedCategoryData = createAsyncThunk(
    "Youtube/fetchSelectedCategoryData",
    async (category) => {
        const fetcheddata = await fetchDataFromApi(`search/?q=${category}`);
        // console.log(fetcheddata.data.contents);
        return fetcheddata.data.contents
    }
)

const initialState = {
    loading: false,
    searchResults: [],
    selectedCategory: 'New',
    mobileMenu: false,
}

const YoutubeSlice = createSlice({
    name: 'Youtube',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setMobileMenu: (state, action) => {
            state.mobileMenu = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSelectedCategoryData.fulfilled, (state, action) => {
            console.log("extrared 1 " , state.loading);
            state.loading = true;
            console.log("extrared 2 " , state.loading);
            state.searchResults = action.payload;
            // console.log(state.searchResults);
            state.loading = false;
            console.log("extrared 3 " , state.loading);
        })
    }
});

export const { setLoading, setSelectedCategory, setMobileMenu } = YoutubeSlice.actions;
export default YoutubeSlice.reducer;