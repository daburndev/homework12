import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
