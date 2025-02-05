import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Box, Divider, Modal, Typography  } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { Link } from 'react-router-dom'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%", 
  maxWidth: 500, 
  height: "60%",  
  maxHeight: 400, 
  bgcolor: "white",
  borderRadius: 10, 
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  p: 5, 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2, 
  background: "linear-gradient(135deg, #f8fafc, #e2e8f0)", 
  textAlign: "center",
};

const QuizPage = () => {
  const { quizId } = useParams();
  const quizData = useSelector((state) => state.quiz);
  const { answers }  = useSelector((state) => state.answer);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [marks, setMarks] = useState(0);

  const [quiz] = quizData.quizes.filter((quiz) => quiz.quizId === quizId);

  function handleSubmit() {
  let finalArray = [];
  let score = 0; 

  for (let i = 0; i < answers.length; i++) {
    const newArray = quiz.questions.filter((q) => {
      if (
        q.questionId === answers[i].questionId &&
        q.correctAnswer === answers[i].optionId
      ) {
        score += 1; 
        return true;
      }
      return false; 
    });

    finalArray = [...finalArray, ...newArray];
  }

  setMarks(score); 
  console.log(score, finalArray);
  setOpen(true);
}

  const getResultStatus = (marks) => {
    const totalMarks = 10;
    const percentage = (marks * 2)/totalMarks * 100;
    if (percentage >= 75)
      return "Pass with Distinction";
    if (percentage >= 40)
      return "Pass";
    return "Fail";
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-36">
      <p className="text-2xl sm:text-3xl md:text-4xl text-center font-bold pt-4 sm:pt-8 pb-4 sm:pb-8 bg-slate-300 font-sans text-[#14192c]">{quiz.title}</p>
      <Divider />
      <div className="p-4 sm:p-8 flex flex-col gap-2">
        {quiz.questions.map((question, index) => {
          return (
            <div className="flex flex-col sm:flex-row gap-4 border-b border-slate-600 p-3" key={question.questionId}>
              <span className='font-bold'>Q.{index + 1}</span>
              <QuestionCard question={question} />
            </div>
          );
        })}
      </div>
      <div className="flex  justify-center items-center gap-5 py-4 sm:py-8">
        <Button
          variant="contained"
          color="success"
          className="w-24 sm:w-36"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>

        <Link to="/">
          <Button
          variant="contained"

          className="w-36"
          >
            Home
          </Button>
          </Link>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
              <Box sx={style}>
                <Typography
                  variant="h4" // Increased font size
                  sx={{ fontWeight: "bold", color: "#14192c", mb: 3 }}
                >
                  Quiz Result
                </Typography>
                
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "600", color: "#374151" }}
                >
                  Marks: <span style={{ color: "#10b981", fontWeight: "bold" }}>{marks * 2} / 10</span>
                </Typography>

                <Typography
                  sx={{
                    fontSize: "20px", 
                    fontWeight: "600",
                    color: getResultStatus(marks) === "Fail" ? "#dc2626" : "#2563eb",
                  }}
                >
                  Result: {getResultStatus(marks)}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 4, width: "120px", height: "45px", fontSize: "16px", borderRadius: "8px", textTransform: "none" }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Box>
        </Modal>
      </div>
    </div>
  );
};

export default QuizPage;
