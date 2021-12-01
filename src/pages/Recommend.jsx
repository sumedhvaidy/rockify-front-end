import React, {useState, useEffect} from "react";
import Axios from 'axios';
import ls, {get, set} from "local-storage";

function Recommend() {

  const [type, setType] = useState("track");
  const [recommendList, setRecommendList] = useState([]);

  const recommend = () => {
    if (type == "track") {
      Axios.get('http://localhost:5000/api/recommend/track', {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setRecommendList(response.data)
      })
    } else if (type == "artist") {
      Axios.get('http://localhost:5000/api/recommend/artist', {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setRecommendList(response.data)
      })
    } else if (type == "album") {
      Axios.get('http://localhost:5000/api/recommend/album', {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
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

      {recommendList.map((val) => {
        if (type == "track") {
          return (
            <div className = "card">
              <div class="center">
                <p> {val.TrackName} &nbsp; </p>
                <p> {val.ArtistName} </p>
                <input type="radio" id="like" name="preference"/>
                <input type="radio" id="dislike" name="preference"/>
              </div>
            </div>
          );
        } else if (type == "artist") {
          return (
            <div className = "card">
              <div class="center">
                <p> {val.ArtistName} </p>
                <input type="radio" id="like" name="preference"/>
                <input type="radio" id="dislike" name="preference"/>
              </div>
            </div>
          );
        } else if (type == "album") {
          return (
            <div className = "card">
              <div class="center">
                <p> {val.AlbumName} &nbsp; </p>
                <p> {val.ArtistName} </p>
                <input type="radio" id="like" name="preference"/>
                <input type="radio" id="dislike" name="preference"/>
              </div>
            </div>
          );
        }
        })}
	  </div>
  );
}

export default Recommend;
