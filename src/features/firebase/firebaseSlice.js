import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
};
const firebaseSlice = createSlice({
    name: "firebase",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});
export const { setUser, clearUser } = firebaseSlice.actions;
export default firebaseSlice.reducer;
