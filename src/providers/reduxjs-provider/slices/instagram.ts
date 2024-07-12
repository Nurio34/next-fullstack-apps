import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

type ComponentsStateType = {
    storiesMaxWidth: number;
    currentUser: string;
    username: string;
    userId: string;
    isProfileUpdated: boolean;
};

const initialState: ComponentsStateType = {
    storiesMaxWidth: 0,
    currentUser: "",
    username: "",
    userId: "",
    isProfileUpdated: true,
};

export const componentsSlice = createSlice({
    name: "instagram",
    initialState,
    reducers: {
        setStoriesMaxWidth: (state, action: PayloadAction<number>) => {
            state.storiesMaxWidth = action.payload;
        },
        setCurrentUser: (state, action: PayloadAction<string>) => {
            state.currentUser = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        setIsProfileUpdated: (state, action: PayloadAction<boolean>) => {
            state.isProfileUpdated = action.payload;
        },
    },
});

export const {
    setStoriesMaxWidth,
    setCurrentUser,
    setUsername,
    setUserId,
    setIsProfileUpdated,
} = componentsSlice.actions;

// export const selectCount = (state: RootState) => state.counter.isOpen

export default componentsSlice.reducer;
