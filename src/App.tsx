import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResumePage from './pages/ResumePage'
import HomePage from './pages/HomePage'

// 引入sass樣式架構
import './App.scss'

// 引入bootstrap框架樣式  
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


// 定義專案基礎路徑
const basename = import.meta.env.VITE_PUBLIC_URL

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/websites" element={<ResumePage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
