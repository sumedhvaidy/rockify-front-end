import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {
  return (
    <div className="App">

      <div className = "searchbar">
        <h1> Rockify Demo </h1>
        <p> Insert an artist into the database</p>
        <label> Artist: </label>
        <input type="text" name = "InsertArtist"/>
        <button> Insert </button>
        <p> Delete an artist from the database</p>
        <label> Artist: </label>
        <input type="text" name = "DeleteArtist"/>
        <button> Delete </button>
        <p>Search for Albums</p>
        <label> Artist: </label>
        <input type="text" name = "Artist"/>
        <br></br>
        <label> Year [From - To]: </label>
        <input type="number" name = "DateStart"/>
        <input type="number" name = "DateEnd"/>
        <br></br>
        <label> Popularity Rating [0 - 100] </label>
        <input type="number" name = "Popularity"/>
        <br></br>
        <label> Duration [in ms] </label>
        <input type="number" name = "DurationStart"/>
        <input type="number" name = "DurationEnd"/>
        <br></br>
        <button> Search </button>

      </div>
    </div>
  );
}

export default App;
