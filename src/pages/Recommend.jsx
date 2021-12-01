import React, {useState, useEffect} from "react";
import Axios from 'axios';

function Recommend() {

  const [type, setType] = useState("track");
  const [recommendList, setRecommendList] = useState([]);

  const recommend = () => {
    alert(type)
    Axios.get('http://localhost:5000/api/recommend', {params: {
      type: type
    }}).then((response) => {
      setRecommendList(response.data)
    })
  };

  return (
		<div className='recommend'>
	    <h1> Recommend a track, artist, or album </h1>
      <div class="center">
        <button> Recommend </button>
      </div>
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
