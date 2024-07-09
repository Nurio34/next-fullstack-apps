import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./slices/tab";
import componentsReducer from "./slices/components";
import instagramReducer from "./slices/instagram";

export const store = configureStore({
    reducer: {
        components: componentsReducer,
        tab: tabReducer,
        instagram: instagramReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
