import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

type ComponentsStateType = {
    headerHeight: number;
    mainHeight: number;
};

const initialState: ComponentsStateType = {
    headerHeight: 0,
    mainHeight: 0,
};

export const componentsSlice = createSlice({
    name: "components",
    initialState,
    reducers: {
        setHeaderHeight: (state, action: PayloadAction<number>) => {
            state.headerHeight = action.payload;
        },
        setMainHeight: (state, action: PayloadAction<number>) => {
            state.mainHeight = action.payload;
        },
    },
});

export const { setHeaderHeight, setMainHeight } = componentsSlice.actions;

// export const selectCount = (state: RootState) => state.counter.isOpen

export default componentsSlice.reducer;
