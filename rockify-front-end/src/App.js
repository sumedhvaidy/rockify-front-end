import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {
  const [artistToInsert, setArtisttoInsert] = useState('');
  const [artistToDelete, setArtistToDelete] = useState('');
  const [albumsList, setAlbumsList] = useState([]);
  const [tracksList, setTracksList] = useState([]);

  const [userName, setUserName] = useState("");
  const [artistToUpdate, setArtistToUpdate] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const [albumNameToGet, setAlbumNameToGet] = useState("");
  const [artistToGet, setArtistToGet] = useState("");
  const [trackToGet, setTrackToGet] = useState("");
  const [yearFromGet, setYearFromGet] = useState(0);
  const [yearToGet, setYearToGet] = useState(new Date().getFullYear());
  const [popularityRating, setPopularityRating] = useState(100);
  const [durationLowerBound, setDurationLowerBound] = useState(0);
  const [durationUpperBound, setDurationUpperBound] = useState(1000000000);

  const [artistPopularityRating, setArtistPopularityRating] = useState(100);
  const [trackPopularityRating, setTrackPopularityRating] = useState(100);
  const [tempo, setTempo] = useState(0);

  const submitArtist = () => {
    Axios.post('http://localhost:5000/api/insert', {
      artist: artistToInsert
    }).then(() => {
      alert('success insert')
    })
  };

  const deleteArtist = () => {
    Axios.delete('http://localhost:5000/api/delete/${artistToDelete}');
  };

  const getAlbums = () => {
    Axios.get('http://localhost:5000/api/getAlbums', {params: {
      albumName: albumNameToGet,
      artist: artistToGet,
      yearFrom: yearFromGet,
      yearTo: yearToGet,
      popularityRating: popularityRating,
    }}).then((response) => {
      setAlbumsList(response.data)
    })
  };

  const getTracks = () => {
    Axios.get('http://localhost:5000/api/getTracks', {params: {
      track: trackToGet,
      artist: artistToGet,
      popularityRating: popularityRating,
      durationLowerBound: durationLowerBound,
      durationUpperBound: durationUpperBound,
    }}).then((response) => {
      setTracksList(response.data)
    })
  };

  const getTracksWithPopularity = () => {
    Axios.get('http://localhost:5000/api/getTracksWithPopularity', {params: {
      ArtistPopularityRating: artistPopularityRating,
      trackPopularityRating: trackPopularityRating,
    }}).then((response) => {
      setTracksList(response.data)
    })
  }

  const getAlbumsWithTempo = () => {
    Axios.get('http://localhost:5000/api/getAlbumsWithTempo', {params: {
      tempo: tempo,
    }}).then((response) => {
      setAlbumsList(response.data)
    })
  }

  const updateUserPreference = () => {
    Axios.patch('http://localhost:5000/api/update', {
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
        <label> Album Name: </label>
        <input type="text" name = "AlbumName" onChange = {(e) => {
          setAlbumNameToGet(e.target.value)
        }} />
        <br></br>
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
        <label> Popularity Rating </label>
        <input type="number" name = "Popularity" onChange = {(e) => {
          setPopularityRating(e.target.value)
        }} />
        <br></br>
        <button onClick={getAlbums}> Search </button>

        <p>Search for Tracks</p>
        <label> Track: </label>
        <input type="text" name = "Track" onChange = {(e) => {
          setTrackToGet(e.target.value)
        }} />
        <br></br>
        <label> Artist: </label>
        <input type="text" name = "Artist" onChange = {(e) => {
          setArtistToGet(e.target.value)
        }} />
        <br></br>
        <label> Popularity Rating </label>
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
        <button onClick={getTracks}> Search </button>

        <p> Get Tracks based on Artist Popularity & Track Popularity </p>
        <label> Artist Popularity Rating </label>
        <input type="number" name = "Popularity" onChange = {(e) => {
          setArtistPopularityRating(e.target.value)
        }} />
        <br></br>
        <label> Track Popularity Rating </label>
        <input type="number" name = "Popularity" onChange = {(e) => {
          setTrackPopularityRating(e.target.value)
        }} />
        <button onClick={getTracksWithPopularity}> Return </button>

        <p> Get Albums where all songs above certain tempo </p>
        <label> Tempo: </label>
        <input type="number" name = "Popularity" onChange = {(e) => {
          setTempo(e.target.value)
        }} />
        <button onClick={getAlbumsWithTempo}> Return </button>

        {albumsList.map((val) => {
          return (
            <div className = "card">
              <h3> Album Name: {val.album}</h3>
            </div>
          );
        })}

        {tracksList.map((val) => {
          return (
            <div className = "card">
              <h3> Track Name: {val.track}</h3>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App;
