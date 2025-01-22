import React from 'react'
import { useSelector } from 'react-redux';
const Home = () => {

  const { quizes } = useSelector((state) => state.quiz);
  return (
    <>
    <div className="min-h-screen bg-slate-300">
      {quizes.map((q) => {
        return <li key={q.quizId}>{q.title}</li>;
      })}
    </div>
    </>
  )
}

export default Home