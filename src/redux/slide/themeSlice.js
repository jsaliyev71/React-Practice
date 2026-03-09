import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === 'light' ? "dark" : "light";
        },
        seetLight(state) {
            state.mode = "light";
        },
        setDark(state) {
            state.mode = "dark";
        },
    },
});

export const {toggleTheme, seetLight, setDark} = themeSlice.actions;

export default themeSlice.reducer