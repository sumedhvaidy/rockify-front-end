import React, {useState, useEffect} from "react";
import Axios from 'axios';

function Recommend() {

  const [recommendFor, setRecommendFor] = useState("");
  const [type, setType] = useState("track");
  const [recommendList, setRecommendList] = useState([]);

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


  const recommend = () => {
    alert(type)
    Axios.get('http://localhost:5000/api/recommend', {params: {
      recommendFor: recommendFor,
      type: type
    }}).then((response) => {
      setRecommendList(response.data)
    })
  };

  return (
		<div className='recommend'>
	    <h1> Recommend a track, artist, or album </h1>
      <div class="center">
  	    <input type="text" placeholder="Recommend..."/>
  	    <button onClick={recommend}> Recommend </button>
      </div>
	    <br/>
      <div class="center">
  	    <input type="radio" id="track" name="type" onClick = {(e) => {
          setType("track")
        }}/>
  	    <label for="Track"> Track </label>
  	    <input type="radio" id="artist" name="type" onClick = {(e) => {
          setType("artist")
        }}/>
  	    <label for="Artist"> Artist </label>
  	    <input type="radio" id="album" name="type" onClick = {(e) => {
          setType("album")
        }}/>
  	    <label for="Album"> Album </label>
        <input type="checkbox" id="advancedSearch"/>
        <label> Advanced Search </label>
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

      {recommendList.map((val) => {
          return (
            <div className = "card">
              <h3> {val.item}</h3>
            </div>
          );
        })}
	  </div>
  );
}

export default Recommend;
