import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {
  const [artistToInsert, setArtisttoInsert] = useState('');
  const [artistToDelete, setArtistToDelete] = useState('');
  const [albumsList, setAlbumsList] = useState([]);

  const [userName, setUserName] = useState("");
  const [artistToUpdate, setArtistToUpdate] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const [artistToGet, setArtistToGet] = useState("");
  const [yearFromGet, setYearFromGet] = useState(0);
  const [yearToGet, setYearToGet] = useState(new Date().getFullYear());
  const [popularityRating, setPopularityRating] = useState(100);
  const [durationLowerBound, setDurationLowerBound] = useState(0);
  const [durationUpperBound, setDurationUpperBound] = useState(1000000000);

  const submitArtist = () => {
    Axios.post('http://localhost:3002/api/insert', {
      artist: artistToInsert
    }).then(() => {
      alert('success insert')
    })
  };

  const deleteArtist = () => {
    Axios.delete('http://localhost:3002/api/delete/${artistToDelete}');
  };

  const getAlbums = () => {
    Axios.get('http://localhost:3002/api/get', {
      artist: artistToGet,
      yearFrom: yearFromGet,
      yearTo: yearToGet,
      popularityRating: popularityRating,
      durationFrom: durationLowerBound,
      durationTo: durationUpperBound
    }).then((response) => {
      setAlbumsList(response.data)
    })
  };

  const updateUserPreference = () => {
    Axios.patch('http://localhost:3002/api/update', {
      userName: userName,
      artist: artistToUpdate,
      favorite: isFavorite
    })
  }

  return (
    <div className="App">

      <div className = "searchbar">
        <h1> Rockify Demo </h1>

        <p> Insert an artist into the database</p>
        <label> Artist: </label>
        <input type="text" name = "InsertArtist" onChange = {(e) => {
          setArtisttoInsert(e.target.value)
        }}/>
        <button onClick={submitArtist}> Insert </button>


        <p> Delete an artist from the database</p>
        <label> Artist: </label>
        <input type="text" name = "DeleteArtist" onChange= {(e) => {
          setArtistToDelete(e.target.value)
        }} />
        <button onClick={deleteArtist}> Delete </button>

        <p> Update user's preference for an artist</p>
        <label> Your Full Name: </label>
        <input type="text" name= "UpdateName" onChange = {(e) => {
          setUserName(e.target.value)
        }} />
        <br></br>
        <label> Artist to Update: </label>
        <input type="text" name="artistToUpdate" onChange = {(e) => {
          setArtistToUpdate(e.target.value)
        }} />
        <br></br>
        <label for="favorite"> Is Artist Favorite: </label> 
        <select name="favorite" id="favorite">
          <option value="yes" onSelect={(e) => {
            setIsFavorite(true)
          }}>Yes</option>
          <option value="no" onSelect={(e) => {
            setIsFavorite(false)
          }}>No</option>
        </select>
        <br></br>
        <button onClick={updateUserPreference}> Update </button>

        <p>Search for Albums</p>
        <label> Artist: </label>
        <input type="text" name = "Artist" onChange = {(e) => {
          setArtistToGet(e.target.value)
        }} />
        <br></br>
        <label> Year [From - To]: </label>
        <input type="number" name = "DateStart" onChange = {(e) => {
          setYearFromGet(e.target.value)
        }}/>
        <input type="number" name = "DateEnd" onChange = {(e) => {
          setYearToGet(e.target.value)
        }}/>
        <br></br>
        <label> Popularity Rating [0 - 100] </label>
        <input type="number" name = "Popularity" onChange = {(e) => {
          setPopularityRating(e.target.value)
        }} />
        <br></br>
        <label> Duration [in ms] </label>
        <input type="number" name = "DurationStart" onChange = {(e) => {
          setDurationLowerBound(e.target.value)
        }}/>
        <input type="number" name = "DurationEnd" onChange = {(e) => {
          setDurationUpperBound(e.target.value)
        }} />
        <br></br>
        <button onClick={getAlbums}> Search </button>
        
        {albumsList.map((val) => {
          return (
            <div className = "card">
              <h3> Album Name: {val.album}</h3>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App;
