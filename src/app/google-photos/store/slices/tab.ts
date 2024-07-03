import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

type TabStateType = {
    isOpen: boolean;
};

const initialState: TabStateType = {
    isOpen: false,
};

export const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        toggleTab: (state) => {
            state.isOpen = !state.isOpen;
        },
        // increment: (state) => {
        //   state.isOpen += 1
        // },

        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //   state.isOpen += action.payload
        // },
    },
});

export const { toggleTab } = tabSlice.actions;

// export const selectCount = (state: RootState) => state.counter.isOpen

export default tabSlice.reducer;
