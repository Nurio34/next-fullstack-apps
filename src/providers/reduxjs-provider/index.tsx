import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./slices/tab";
import componentsReducer from "./slices/components";

export const store = configureStore({
    reducer: {
        components: componentsReducer,
        tab: tabReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
