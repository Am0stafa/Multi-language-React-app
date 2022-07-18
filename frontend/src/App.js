import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Header from './components/Header'
import Home from './Pages/Home';
import Profile from "./Pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>      
        <Route path="/profile" element={<Profile/>}/>      
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;