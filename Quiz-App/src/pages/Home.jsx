import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../public/images/logo.webp"
import quiz from "../../public/images/quiz.jpg"
import About from './About';

const Home = () => {
  const { quizes } = useSelector((state) => state.quiz);

  return (
    <>
      <header className='flex flex-col md:flex-row justify-between items-center px-6 md:px-28 py-3 bg-slate-300'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt="logo" className='w-16 md:w-20 rounded-full'></img>
          <p className='font-bold text-2xl md:text-4xl font-sans text-[#14192c]'>CodeQ</p>
        </div>
        <div>
          <ul className='flex flex-col md:flex-row gap-4 md:gap-10 font-sans font-semibold text-lg md:text-2xl text-[#14192c]'>
            <Link to="/"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
          </ul>
        </div>  
      </header>
      <div className="h-auto md:h-screen bg-[white] px-4 text-center">
        <div className='flex flex-col justify-center items-center gap-6 pt-10'>
          <img src={quiz} alt="quiz-img" className="w-full max-w-md"></img>
          <p className='font-bold text-2xl md:text-4xl font-sans'>"Are You Ready to Code the Quiz?"</p>
          <p className='font-semibold text-[16px] md:text-[18px] text-[#2182a5f5] font-serif'>
            Step into CodeQ, the ultimate platform for tech quiz. <br></br> Fun, challenge, and learning await - start your journey now!
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center px-4 text-center'>
        <p className='font-bold text-2xl md:text-3xl font-serif text-[#14192c]'>Choose Your Challenge</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-36 py-10 md:py-20">
        {quizes.map((q) => {
          return (
            <Link
              to={`quiz-page/${q.quizId}`}
              key={q.quizId}
              className="flex flex-col justify-center text-center items-center p-6 md:p-8 gap-2 border border-slate-600 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl bg-slate-200 "
            >
              <img src={q.image} className="w-32 md:w-40" />
              <p className='font-bold text-[#14192c]'>{q.title}</p>
              <p className='font-semibold'>{q.description}</p>
            </Link>
          );
        })}
      </div>
      <footer className='h-auto py-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-28 bg-slate-300 text-center md:text-left'>
        <p className='font-semibold text-lg md:text-xl font-sans text-[#14192c]'>© 2025 CodeQ. All Rights Reserved.</p>
        <div className='flex flex-col md:flex-row font-semibold text-lg md:text-xl font-sans gap-2 md:gap-5 text-[#14192c]'>
          <Link to="/">Privacy Policy</Link>
          <p className='hidden md:block'>|</p>
          <Link to="/">Terms and Conditions</Link>
        </div>
      </footer>
    </>
  );
};

export default Home;
