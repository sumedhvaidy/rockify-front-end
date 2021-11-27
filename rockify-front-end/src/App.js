import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

const App = () => (
  <div className = "App">
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
    <div class = "menu">
      <li><NavLink activeClassName="current" to='/'><img src="rockifylogo.ico" width="50px" /></NavLink></li>
      <li><NavLink activeClassName="current" to='/search'>Search</NavLink></li>
      <li>Recommend</li>
      <li>My Likes</li>
      <div class = "login">
        <li>Login</li>
      </div>
    </div>
);

const Home = () => (
  <div className='home'>
    <h1> This is the homepage! </h1>
  </div>
);

const Search = () => (
  <div class = "search">
    <h1> The test is successful </h1>
  </div>
);

const Main = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/search' element={<Search />} />
  </Routes>
);

export default App;
