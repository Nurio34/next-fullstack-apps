import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import {
    ActiveTabType,
    EditTabIdType,
    EnhancementType,
    TransformationsType,
} from "@/app/google-photos/types";

type TabStateType = {
    isOpen: boolean;
    activeTab: ActiveTabType;
    activeEditTab: EditTabIdType;
    enhancement: EnhancementType;
    transformations: TransformationsType;
};

const initialState: TabStateType = {
    isOpen: false,
    activeTab: "edit",
    activeEditTab: "enhance",
    enhancement: "none",
    transformations: {},
};

export const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        toggleTab: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setActiveTab: (state, action: PayloadAction<ActiveTabType>) => {
            state.activeTab = action.payload;
        },
        setActiveEditTab: (state, action: PayloadAction<EditTabIdType>) => {
            state.activeEditTab = action.payload;
        },
        setEnhancement: (state, action: PayloadAction<EnhancementType>) => {
            state.enhancement = action.payload;
        },
        setTransformations: (state, action: PayloadAction<EnhancementType>) => {
            if (action.payload === "restore") {
                state.transformations = { restore: true };
            } else if (action.payload === "improve") {
                state.transformations = { improve: true };
            } else if (action.payload === "remove-background") {
                state.transformations = { removeBackground: true };
            } else {
                state.transformations = {};
            }
        },
    },
});

export const {
    toggleTab,
    setActiveTab,
    setActiveEditTab,
    setEnhancement,
    setTransformations,
} = tabSlice.actions;

// export const selectCount = (state: RootState) => state.counter.isOpen

export default tabSlice.reducer;
