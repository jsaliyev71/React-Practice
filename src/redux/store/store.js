import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slide/counterSlice'
import themeReducer from '../slide/themeSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
    },
})