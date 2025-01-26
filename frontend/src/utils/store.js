import { configureStore } from '@reduxjs/toolkit';
import recommendationReducer from './suggestionSlice'; // Path to your recommendationData slice

const store = configureStore({
    reducer: {
        recommendation: recommendationReducer, // Add the slice reducer here
    },
});

export default store;
