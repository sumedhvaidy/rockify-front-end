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
                <p> {val.TrackName} &nbsp;</p>
                <p> {val.ArtistName} </p>
                <input type="radio" id="like" name={val.TrackId} onClick={
                  () => interact(val.TrackId, "LIKE")}/>
                <input type="radio" id="dislike" name={val.TrackId} onClick={
                  () => interact(val.TrackId, "DISLIKE")}/>
              </div>
            </div>
          );
        } else if (type == "artist") {
          return (
            <div className = "card">
              <div class="center">
                <p> {val.ArtistName} </p>
                <input type="radio" id="like" name={val.ArtistId} onClick={
                  () => interact(val.ArtistId, "LIKE")}/>
                <input type="radio" id="dislike" name={val.ArtistId} onClick={
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
                <input type="button" id="like" name={val.AlbumId} onClick={
                  () => interact(val.AlbumId, "LIKE")}/>
                <input type="button" id="dislike" name={val.AlbumId} onClick={
                  () => interact(val.AlbumId, "DISLIKE")}/>
              </div>
            </div>
          );
        }

        })}
	  </div>
  );
}

export default Recommend;
