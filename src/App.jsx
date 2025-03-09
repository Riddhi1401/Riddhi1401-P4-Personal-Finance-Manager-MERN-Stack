import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Finance from './pages/Finance'
import Security from './pages/Security'
function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/Finance' element={<Finance/>} />
          <Route path='/Security' element={<Security/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
