import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    idMarkDown: null,
    nameMarkDown: null,
    valueMark: null,
    typeMarkDown: null
};
const markDownSlice = createSlice({
    name: "markdown",
    initialState,
    reducers: {
        setMarkDown(state, action) {
            state.idMarkDown = action.payload.idMarkDown;
            state.nameMarkDown = action.payload.nameMarkDown;
            state.valueMark = action.payload.valueMark;
            state.typeMarkDown = action.payload.typeMarkDown;
        },
        clearMarkDown(state) {
            state.idMarkDown = null;
            state.nameMarkDown = null;
            state.valueMark = null;
            state.typeMarkDown = null;
        },
    },
});
export const { setMarkDown, clearMarkDown } = markDownSlice.actions;
export default markDownSlice.reducer;
