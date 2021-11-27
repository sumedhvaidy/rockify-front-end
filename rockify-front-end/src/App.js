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
  const [yearToGet, setYearToGet] = useState(2021);
  const [popularityRating, setPopularityRating] = useState(0);
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
    Axios.delete('http://localhost:5000/api/delete', {data: {
      artist: artistToDelete
    }});
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

  const handleDropdownChange = (e) => {
    console.log("Changed" + e.target.value);
    if(e.target.value === "yes") {
      setIsFavorite(true);
    } else if(e.target.value === "no") {
      setIsFavorite(false);
    }
  }

  return (
    <div className = "App">
      <div class = "menu">
        <li> <img src="rockifylogo.ico" width="50px" /> </li>
        <li> Search </li>
        <li> Recommend </li>
        <li> My Likes </li>
        <div class = "login">
          <li> Login </li>
        </div>
      </div>
    </div>
  );
}

export default App;
