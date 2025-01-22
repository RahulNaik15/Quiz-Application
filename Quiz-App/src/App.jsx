
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Dashboard from './components/Dashboard'
import QuizPage from './pages/QuizPage'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route> 
        {/* <Route path="/" element={<Dashboard></Dashboard>}></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="quiz-page/:quizId" element={<QuizPage></QuizPage>}> </Route>
      </Routes> 
    </>
  )
}

export default App
