import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "../slices/quizSlice";
import { answerReducer } from "../slices/answerSlice";

const store = configureStore({
    
    reducer: {
        quiz: quizReducer,
        answer: answerReducer,
    },
})

export default store