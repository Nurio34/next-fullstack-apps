import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

type ComponentsStateType = {
    storiesMaxWidth: number;
};

const initialState: ComponentsStateType = {
    storiesMaxWidth: 0,
};

export const componentsSlice = createSlice({
    name: "instagram",
    initialState,
    reducers: {
        setStoriesMaxWidth: (state, action: PayloadAction<number>) => {
            state.storiesMaxWidth = action.payload;
        },
    },
});

export const { setStoriesMaxWidth } = componentsSlice.actions;

// export const selectCount = (state: RootState) => state.counter.isOpen

export default componentsSlice.reducer;
