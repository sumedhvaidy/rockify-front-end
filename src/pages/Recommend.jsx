import React, {useState, useEffect} from "react";
import Axios from 'axios';

function Recommend() {

  const [type, setType] = useState("track");
  const [recommendList, setRecommendList] = useState([]);

  const recommend = () => {
    if (type == "track") {
      Axios.get('http://localhost:5000/api/recommend/track').then((response) => {
        setRecommendList(response.data)
      })
    } else if (type == "artist") {
      Axios.get('http://localhost:5000/api/search/artist').then((response) => {
        setRecommendList(response.data)
      })
    } else if (type == "album") {
      Axios.get('http://localhost:5000/api/search/album').then((response) => {
        setRecommendList(response.data)
      })
    }
  };

  return (
		<div className='recommend'>
	    <h1> Recommend a track, artist, or album </h1>
      <div class="center">
        <button> Recommend </button>
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
      </div>
      <br/>

      <div class="list">
        <div class="center">
          <p> Track &nbsp;</p>
          <p> Artist </p>
          <input type="radio" id="like" name="preference"/>
          <input type="radio" id="dislike" name="preference"/>
        </div>
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
