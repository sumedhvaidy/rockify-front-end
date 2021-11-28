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
      <li><NavLink to='/'><img src="rockifylogo.ico" width="50px" /></NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/recommend'>Recommend</NavLink></li>
      <li><NavLink to='/mylikes'>My Likes</NavLink></li>
      <div class = "logout">
        <li><NavLink to='/'>Log Out</NavLink></li>
      </div>
    </div>
);

const Login = () => (
  <div className='login'>
    <h1> Login </h1>
    <label for="username">Username: </label>
    <input type="text" />
    <br></br>
    <label for="password">Password: </label>
    <input type="password" />
    <br></br>
    <button> Submit </button>
  </div>
);

const Search = () => (
  <div className='search'>
    <h1> Search for a track, artist, or album </h1>
    <input type="text" placeholder="Search..."/>
    <button> Search </button>
    <br></br>
    <input type="checkbox" id="Track" name="Track"/>
    <label for="Track"> Track </label>
    <input type="checkbox" id="Artist" name="Artist"/>
    <label for="Artist"> Artist </label>
    <input type="checkbox" id="Album" name="Album"/>
    <label for="Album"> Album </label>
  </div>
);

const Recommend = () => (
  <div className='recommend'>
    <h1> Recommend a track, artist, or album </h1>
    <input type="text" placeholder="Recommend..."/>
    <button> Recommend </button>
    <br></br>
    <input type="radio" id="TrackSearch" name="recommendSelection"/>
    <label for="Track"> Track </label>
    <input type="radio" id="Artist" name="recommendSelection"/>
    <label for="Artist"> Artist </label>
    <input type="radio" id="Album" name="recommendSelection"/>
    <label for="Album"> Album </label>
  </div>
);

const MyLikes = () => (
  <div className='mylikes'>
    <h1> My Likes </h1>
  </div>
);

const Main = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/search' element={<Search />} />
    <Route path='/recommend' element={<Recommend />} />
    <Route path='/mylikes' element={<MyLikes />} />
  </Routes>
);

export default App;
