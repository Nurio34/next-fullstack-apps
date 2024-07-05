import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import {
    ActiveTabType,
    CropObjType,
    CropType,
    DefaultTransformationsType,
    EditTabIdType,
    EnhancementType,
    FilterObjectType,
    FilterType,
    TransformationsType,
} from "@/app/google-photos/types";

type TabStateType = {
    isOpen: boolean;
    activeTab: ActiveTabType;
    activeEditTab: EditTabIdType;
    enhancement: EnhancementType;
    transformations: TransformationsType;
    cropObj?: CropObjType;
    filter: FilterType;
};

const initialState: TabStateType = {
    isOpen: false,
    activeTab: "none",
    activeEditTab: "enhance",
    enhancement: "none",
    transformations: {},
    cropObj: {
        cropType: "none",
    },
    filter: "none",
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
        setEnhanceTransformations: (
            state,
            action: PayloadAction<EnhancementType>,
        ) => {
            if (action.payload === "restore") {
                if (!state.transformations.restore) {
                    state.transformations.restore = true;
                } else {
                    state.transformations.restore = false;
                }
            } else if (action.payload === "improve") {
                if (!state.transformations.improve) {
                    state.transformations.improve = true;
                } else {
                    state.transformations.improve = false;
                }
            } else if (action.payload === "removeBackground") {
                if (!state.transformations.removeBackground) {
                    state.transformations.removeBackground = true;
                } else {
                    state.transformations.removeBackground = false;
                }
            } else {
                state.transformations = {
                    ...state.transformations,
                    restore: false,
                    improve: false,
                    removeBackground: false,
                };
            }
        },
        setCrop: (state, action: PayloadAction<CropType>) => {
            state.cropObj!.cropType = action.payload;
        },
        setCropTransformations: (state, action: PayloadAction<CropObjType>) => {
            const { cropType, width, height } = action.payload;
            if (cropType === "square") {
                if (width! > height!) {
                    state.transformations.width = height;
                } else {
                    state.transformations.height = width;
                }
            } else if (cropType === "landscape") {
                state.transformations.width = width;
                state.transformations.height = (width! * 9) / 16;
            } else if (cropType === "portrait") {
                state.transformations.height = height;
                state.transformations.width = (height! * 9) / 16;
            } else {
                state.transformations = {
                    ...state.transformations,
                    width: width,
                    height: height,
                };
            }
            state.transformations.crop = {
                source: true,
                type: "fill",
            };
        },
        setFilter: (state, action: PayloadAction<FilterType>) => {
            state.filter = action.payload;
        },
        setFilterTransformations: (
            state,
            action: PayloadAction<FilterObjectType>,
        ) => {
            state.transformations = {
                ...state.transformations,
                ...action.payload,
            };
        },
        reArrangeTransformations: (
            state,
            action: PayloadAction<DefaultTransformationsType>,
        ) => {
            state.transformations = action.payload;
        },
        resetTransformations: (state) => {
            state.transformations = {};
        },
    },
});

export const {
    toggleTab,
    setActiveTab,
    setActiveEditTab,
    setEnhancement,
    setEnhanceTransformations,
    setCrop,
    setCropTransformations,
    setFilter,
    setFilterTransformations,
    reArrangeTransformations,
    resetTransformations,
} = tabSlice.actions;

// export const selectCount = (state: RootState) => state.counter.isOpen

export default tabSlice.reducer;
