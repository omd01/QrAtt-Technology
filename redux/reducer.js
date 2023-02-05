import { createReducer } from "@reduxjs/toolkit";

export const auth = createReducer({}, {
    loginRequest: (state) => {
        state.laoding = true;
    },
    loginSuccess: (state, action) => {},
    loginFailure: (state, action) => {},
});