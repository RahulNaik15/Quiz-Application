import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {
  const { quizes } = useSelector((state) => state.quiz);

  // const imgUrl =
  //   "https://play-lh.googleusercontent.com/7nZqAPEuWxAeckXC-lm1fWEk6pDK3mRlUCxPuLIctJ1MD9RM0HPgOdrhOwr39deWSjtn";
  return (
    <>
      <div className="h-screen bg-slate-500"></div>
      <div className="min-h-screen bg-slate-300 px-36 py-20 grid grid-cols-3 gap-8">
        {quizes.map((q) => {
          return (
            <Link
              to={`quiz-page/${q.quizId}`}
              key={q.quizId}
              className="flex flex-col justify-center text-center items-center p-8 border border-slate-600 rounded-xl"
            >
              <img src={q.image} className="w-40" />
              <p>{q.title}</p>
              <p>{q.description}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;