import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface MarkDownState {
    idMarkDown : string | null;
    nameMarkDown: string | null;
    valueMark: string | null;
    typeMarkDown: string | null
}

const initialState : MarkDownState = {
    idMarkDown: null,
    nameMarkDown: null,
    valueMark: null,
    typeMarkDown: null
};

const markDownSlice = createSlice({
    name: "markdown",
    initialState,
        reducers: {
            setMarkDown(state, action: PayloadAction<MarkDownState>){
            state.idMarkDown = action.payload.idMarkDown;
            state.nameMarkDown = action.payload.nameMarkDown;
            state.valueMark = action.payload.valueMark;
            state.typeMarkDown = action.payload.typeMarkDown;
        },
        clearMarkDown(state){
            state.idMarkDown = null;
            state.nameMarkDown = null;
            state.valueMark = null;
            state.typeMarkDown = null;
        },
    },
});


export const { setMarkDown, clearMarkDown } = markDownSlice.actions;
export default markDownSlice.reducer;
