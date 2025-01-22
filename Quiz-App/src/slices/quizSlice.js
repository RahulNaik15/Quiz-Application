import { createSlice } from "@reduxjs/toolkit";
import { quizes } from "../utils/data";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        quizes,
    },
    reducers: {
        addQuestion: () =>{},
    },
});

export const quizReducer = quizSlice.reducer;
export const { addQuestion } = quizSlice.actions;