var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebaseConfig";
export const fetchUsers = createAsyncThunk("users/fetchUsers", () => __awaiter(void 0, void 0, void 0, function* () {
    const querySnapshot = yield getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
    return users;
}));
const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users = action.payload;
        })
            .addCase(fetchUsers.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
});
export default usersSlice.reducer;
