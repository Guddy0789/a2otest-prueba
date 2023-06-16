import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Problem1 } from '../pages/problem1'
import { Problem2 } from '../pages/Problem2'
import { Navigation } from '../components/Navigation'
const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/problem-1"/>} />
        <Route path="/problem-1" element={<Problem1/>} />
        <Route path="/problem-2" element={<Problem2/>} />
      </Routes>
    </BrowserRouter>
  )
  
}
export default App
