import './App.css'
import Login from './Components/Login.tsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from "./Components/RegisterForm.tsx";
function App() {


  return (
    <Router>
        <Routes>
            <Route path={'/'} Component={Login}/>
            <Route path={'/register'} Component={Register}/>
        </Routes>
    </Router>
  )
}

export default App
