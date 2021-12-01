import React, {useState, useEffect} from "react";
import Axios from 'axios';
import ls, {get, set} from "local-storage";

function Search() {

  const [searchFor, setSearchFor] = useState("");
  const [type, setType] = useState("track");
  const [searchList, setSearchList] = useState([]);

  const [durationMin, setDurationMin] = useState(0);
  const [durationMax, setDurationMax] = useState(1000000000);
  const [popularity, setPopularity] = useState(0);
  const [releaseYearMin, setReleaseYearMin] = useState(0);
  const [releaseYearMax, setReleaseYearMax] = useState(2022);
  const [tempo, setTempo] = useState(0);
  const [danceability, setDanceability] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [loudness, setLoudness] = useState(0);
  const [speechiness, setSpeechiness] = useState(0);
  const [acousticness, setAcousticness] = useState(0);
  const [instrumentalness, setInstrumentalness] = useState(0);
  const [liveness, setLiveness] = useState(0);
  const [valence, setValence] = useState(0);

  const search = () => {
    if (type == "track") {
      Axios.get('http://localhost:5000/api/search/track', {params: {
        name: searchFor
      },
      headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setSearchList(response.data)
      })
    } else if (type == "artist") {
      Axios.get('http://localhost:5000/api/search/artist', {params: {
        name: searchFor
      },
      headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setSearchList(response.data)
      })
    } else if (type == "album") {
      Axios.get('http://localhost:5000/api/search/album', {params: {
        name: searchFor
      },
      headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setSearchList(response.data)
      })
    }
  };

  const interact = (info, interaction) => {
    console.log(info)
    console.log(interaction)
    if (type == "track") {
      Axios.post('http://localhost:5000/api/interact/track', {
        track_id: info,
        interaction: interaction
      },
      {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }})
    } else if (type == "artist") {
      Axios.post('http://localhost:5000/api/interact/artist', {
        artist_id: info,
        interaction: interaction
      },
      {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }})
    } else if (type == "album") {
      Axios.post('http://localhost:5000/api/interact/album', {
        album_id: info,
        interaction: interaction
      },
      {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }})
    }
  };

  const advancedSearch = () => {

  }

  return (
		<div className='search'>
	    <h1> Search for a track, artist, or album </h1>
      <div class="center">
  	    <input type="text" placeholder="Search..." onChange = {(e) => {
          setSearchFor(e.target.value)
        }}/>
  	    <button onClick={search}> Search </button>
        <button onClick={advancedSearch}> Advanced Search </button>
      </div>
	    <br></br>
      <div class="center">
        <input type="radio" id="track" name="type" onClick = {(e) => {
          setType("track")
        }}/>
        <label> Track </label>
        <input type="radio" id="artist" name="type" onClick = {(e) => {
          setType("artist")
        }}/>
        <label> Artist </label>
        <input type="radio" id="album" name="type" onClick = {(e) => {
          setType("album")
        }}/>
        <label> Album </label>
      </div>

      <div id="advancedOptions">
        <label> Duration [in ms] </label>
        <input type="number" onChange = {(e) => {
          setDurationMin(e.target.value)
        }}/>
        <input type="number" onChange = {(e) => {
          setDurationMax(e.target.value)
        }}/>
        <br/>
        <label> Popularity </label>
        <input type="number" onChange = {(e) => {
          setPopularity(e.target.value)
        }}/>
        <br/>
        <label> Release Year </label>
        <input type="number" onChange = {(e) => {
          setReleaseYearMin(e.target.value)
        }}/>
        <input type="number" onChange = {(e) => {
          setReleaseYearMax(e.target.value)
        }}/>
        <br/>
        <label> Tempo </label>
        <input type="number" onChange = {(e) => {
          setTempo(e.target.value)
        }}/>
        <br/>
        <label> Danceability </label>
        <input type="number" onChange = {(e) => {
          setDanceability(e.target.value)
        }}/>
        <br/>
        <label> Energy </label>
        <input type="number" onChange = {(e) => {
          setEnergy(e.target.value)
        }}/>
        <br/>
        <label> Loudness </label>
        <input type="number" onChange = {(e) => {
          setLoudness(e.target.value)
        }}/>
        <br/>
        <label> Speechiness </label>
        <input type="number" onChange = {(e) => {
          setSpeechiness(e.target.value)
        }}/>
        <br/>
        <label> Acousticness </label>
        <input type="number" onChange = {(e) => {
          setAcousticness(e.target.value)
        }}/>
        <br/>
        <label> Instrumentalness </label>
        <input type="number" onChange = {(e) => {
          setInstrumentalness(e.target.value)
        }}/>
        <br/>
        <label> Liveness </label>
        <input type="number" onChange = {(e) => {
          setLiveness(e.target.value)
        }}/>
        <br/>
        <label> Valence </label>
        <input type="number" onChange = {(e) => {
          setValence(e.target.value)
        }}/>
        <br/>
      </div>
      <br/>

      {searchList.map((val) => {
        if (type == "track") {
          return (
            <div className = "card">
              <div class="center">
                <p> {val.TrackName} &nbsp;</p>
                <p> {val.ArtistName} </p>
                <input type="radio" id="like" name="preference" onClick={
                  () => interact(val.TrackId, "LIKE")}/>
                <input type="radio" id="dislike" name="preference" onClick={
                  () => interact(val.TrackId, "DISLIKE")}/>
              </div>
            </div>
          );
        } else if (type == "artist") {
          return (
            <div className = "card">
              <div class="center">
                <p> {val.ArtistName} </p>
                <input type="radio" id="like" name="preference" onClick={
                  () => interact(val.ArtistId, "LIKE")}/>
                <input type="radio" id="dislike" name="preference" onClick={
                  () => interact(val.ArtistId, "DISLIKE")}/>
              </div>
            </div>
          );
        } else if (type == "album") {
          return (
            <div className = "card">
              <div class="center">
                <p> {val.AlbumName} &nbsp;</p>
                <p> {val.ArtistName} </p>
                <input type="button" id="like" name="preference" onClick={
                  () => interact(val.AlbumId, "LIKE")}/>
                <input type="button" id="dislike" name="preference" onClick={
                  () => interact(val.AlbumId, "DISLIKE")}/>
              </div>
            </div>
          );
        }

        })}
	  </div>
  );
}

export default Search;
