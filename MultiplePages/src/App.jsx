import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Todo from './pages/Todo';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Pagination from './pages/Pagination';

function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  const [isdarkmode, setIsDarkmode] = useState(true);  // Make sure the state name matches

  return (
    <div className={`w-full min-h-screen  ${isdarkmode ? 'bg-black text-white' : 'bg-zinc-3 00 text-black'}`}>
      <Navbar isloggedin={isloggedin} setIsloggedin={setIsloggedin} isdarkmode={isdarkmode} setIsDarkmode={setIsDarkmode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='calculator' element={<Calculator />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/login' element={<Login isloggedin={isloggedin} setIsloggedin={setIsloggedin} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pagination' element={<Pagination />} />
      </Routes>
    </div>
  );
}

export default App;
