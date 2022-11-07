import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

//Components
import Authors from './components/Authores';
import Home from './components/Home';

export default function App(){

  const[authors, setAuthors] = useState('');

  return(
    <Routes>
      <Route path='/' element={<Home authors={authors} setAuthors={setAuthors}/>}/>
      <Route path='/author' element={<Authors authors={authors}/>}/>
    </Routes>
  )

}