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
      <header className='flex justify-between items-center px-28 pt-3 pb-3 bg-slate-300'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt="logo" className='w-20 rounded-full'></img>
          <p className='font-bold text-4xl font-sans text-[#14192c]'>CodeQ</p>
        </div>
        <div>
          <ul className='flex gap-10 font-sans font-semibold text-2xl text-[#14192c]'>
            <Link to="/"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
            
          </ul>
        </div>  
      </header>
      <div className="h-screen bg-[white]">
        <div className='flex flex-col justify-center items-center gap-6 pt-10'>
          <img src={quiz} alt="quiz-img"></img>
          <p  className='font-bold text-4xl font-sans'>"Are You Ready to Code the Quiz?"</p>
          <p className='font-semibold text-[18px] text-center text-[#2182a5f5] font-serif'>Step into CodeQ, the ultimate platform for tech quiz. <br></br> Fun, challenge, and learning await-start your journey now!</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <p className='font-bold text-3xl font-serif text-[#14192c]'>Choose Your Challenge</p>
      </div>
      <div className="min-h-screen bg-[white] px-36 py-20 grid grid-cols-3 gap-8">
        {quizes.map((q) => {
          return (
            <Link
              to={`quiz-page/${q.quizId}`}
              key={q.quizId}
              className="flex flex-col justify-center text-center items-center p-8 gap-2 border border-slate-600 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl bg-slate-200 "
            >
              <img src={q.image} className="w-40" />
              <p className='font-bold text-[#14192c]'>{q.title}</p>
              <p className='font-semibold'>{q.description}</p>
            </Link>
          );
        })}
      </div>

      <footer className='h-24 flex justify-between items-center px-28 bg-slate-300'>
        <div>
          <p className='font-semibold text-xl font-sans text-[#14192c]'>© 2025 CodeQ. All Rights Reserved.</p>
        </div>
        <div className='flex font-semibold text-xl font-sans gap-5 text-[#14192c]'>
          <Link to="/">Privacy Policy</Link>
          <p>|</p>
          <Link to="/">Terms and Conditions</Link>
        </div>
      </footer>
    </>
  );
};

export default Home;