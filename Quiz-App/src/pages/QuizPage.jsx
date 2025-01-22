import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Divider  } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';


const QuizPage = () => {
  const { quizId } = useParams();

  const quizData = useSelector((state) => state.quiz);

  const [quiz] = quizData.quizes.filter((quiz) => quiz.quizId === quizId);

  const [answers, setAnswers] = useState([]); 

  function handleSubmit() {
    let marks = 0;
    for (let i = 0; i < 5; i++) {
      if (answers[i].optionId === quiz.questions[i].correctAnswer) {
        marks++;
      }
    }
    alert(marks);
  }

  return (
    <div>
      <p className="text-4xl text-center font-semibold pt-8">{quiz.title}</p>
      <p className="text-center pb-8">{quiz.description}</p>
      <Divider />
      <div className="p-8 px-36 flex flex-col gap-8">
        {quiz.questions.map((question, index) => {
          return (
            <div className="flex gap-4" key={question.questionId}>
              <span>Q. {index + 1}</span>
              <QuestionCard question={question} setAnswers={setAnswers} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-8">
        <Button
          variant="contained"
          color="success"
          className="w-36"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

function QuestionCard({ question, setAnswers }) {
  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option) => {
        return (
          <div className="flex gap-4" key={option.optionId}>
            <input
              type="radio"
              name={question.questionId}
              id={question.question}
              value={option.optionId}
              onChange={(e) =>
                setAnswers((prev) => [
                  ...prev,
                  {
                    questionId: question.questionId,
                    optionId: e.target.value,
                  },
                ])
              }
            />
            <label htmlFor={question.question}>{option.answer}</label>
          </div>
        );
      })}
    </div>
  );
}

export default QuizPage;