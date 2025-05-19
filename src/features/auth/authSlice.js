import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: null,
    password: null,
    sdt: null,
    email: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Cập nhật thông tin người dùng
        setAuth(state, action) {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.sdt = action.payload.sdt;
            state.email = action.payload.email;
        },
        // Xóa thông tin người dùng
        clearAuth(state) {
            state.username = null;
            state.password = null;
            state.sdt = null;
            state.email = null;
        },
    },
});
export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
