import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { Todo } from "@/types";
import axios from "axios";

type InitialStateType = {
    todos: Todo[];
};

const initialState: InitialStateType = {
    todos: [{ title: "todo1" }] as Todo[],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //   state.value += action.payload
        // },
    },
});

export const {} = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.todos

export default todosSlice.reducer;
