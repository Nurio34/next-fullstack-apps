import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import axios from "axios";
import { User } from "@clerk/nextjs/server";

export type UserType = {
    id: string;
    name: string;
    email: string;
};

export const fetchUser = createAsyncThunk<UserType>(
    "user/fetchUser",
    async () => {
        const response = await axios.get("/api/auth"); // Your API endpoint
        return response.data;
    },
);

type InitialStateType = {
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    user: UserType;
};

const initialState: InitialStateType = {
    status: "idle",
    error: null,
    user: {} as UserType,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //   state.value += action.payload
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                fetchUser.fulfilled,
                (state, action: PayloadAction<UserType>) => {
                    state.status = "succeeded";
                    state.user = action.payload;
                },
            )
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch user";
            });
    },
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.user

export default userSlice.reducer;
