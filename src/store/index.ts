import { configureStore } from "@reduxjs/toolkit";

// ...
import todosReducer from "./slices/todos";
import userReducer from "./slices/user";

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
