import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

type ComponentsStateType = {
    storiesMaxWidth: number;
    currentUser: string;
    username: string;
};

const initialState: ComponentsStateType = {
    storiesMaxWidth: 0,
    currentUser: "",
    username: "",
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
    },
});

export const { setStoriesMaxWidth, setCurrentUser, setUsername } =
    componentsSlice.actions;

// export const selectCount = (state: RootState) => state.counter.isOpen

export default componentsSlice.reducer;
