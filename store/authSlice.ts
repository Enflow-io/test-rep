import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
const hydrate = createAction<AppState>(HYDRATE);
// Type for our state
export interface AuthState {
    authState: boolean;
}

// Initial state
const initialState: AuthState = {
    authState: false,
};

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to set the authentication status
        setAuthState(state, action) {
            state.authState = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(hydrate, (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        })
    }
});


export const { setAuthState } = authSlice.actions;

    export const selectAuthState = (state: AppState) => state.auth.authState;

    export default authSlice.reducer;