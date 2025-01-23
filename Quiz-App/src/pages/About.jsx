import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <>
        <div className='flex justify-center items-center pt-3 pb-3 bg-slate-300'>
            <p className='font-bold text-4xl font-sans text-[#14192c]'>About CodeQ (Quiz Application)</p>  
        </div>
          
          <div className='flex flex-col justify-center items-center mt-11'>
              <div className="flex flex-col justify-start  items-start p-8 gap-2  rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl bg-slate-200 ">
              <p className='font-semibold'>Welcome to CodeQ, your ultimate platform for testing and enhancing your programming knowledge!</p>
                  <p>Our application is designed to help individuals test their technical skills through interactive quizzes <br></br> on various programming languages.</p>
                  <p className='font-semibold text-2xl'>Purpose:</p>
                  <p>CodeQ aims to make learning programming engaging and accessible. Whether you're a beginner <br></br> looking to test your basics or a seasoned developer brushing up on advanced concepts, CodeQ has <br></br> something for everyone.</p>
                  <p className='font-semibold text-2xl'>Key Features:</p>
                  <p><b>Wide Range of Topics:</b> Quizzes on programming languages like Java, Python, JavaScript, and more.</p>
                  <p><b>Dynamic Scoring System: </b> Get instant feedback with calculated scores after each quiz.</p>
                  <p><b>Result Analysis: </b> See your performance categorized as Pass, Fail, or Distinction based on your score.</p>
                  <p><b>User-Friendly Interface:</b> Clean and intuitive design for a seamless user experience.</p>
                  <p className='font-semibold text-2xl'>Our Vision:</p>
                  <p>To empower learners and developers by providing a fun, engaging, and practical approach to <br></br> mastering programming concepts.</p>
              </div> 
          </div>
          
          <div className='flex justify-center items-center mt-7'>
          <Link to="/">
          <Button
          variant="contained"
          color="success"
          className="w-36"
          >
            Home
          </Button>
          </Link>
          </div>
          
          

    </>
  )
}

export default About