import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FirebaseState {
  user: any | null;
}

const initialState: FirebaseState = {
  user: null,
};

const firebaseSlice = createSlice({
  name: "firebase",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = firebaseSlice.actions;
export default firebaseSlice.reducer;
