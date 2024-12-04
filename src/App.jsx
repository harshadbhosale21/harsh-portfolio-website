import { useState } from 'react'
import { Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import DrawerAppBar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <main>
        <Router>
          <DrawerAppBar />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
