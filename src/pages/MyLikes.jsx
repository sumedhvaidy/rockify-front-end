import React, {useState, useEffect} from "react";
import Axios from 'axios';
import ls, {get, set} from "local-storage";

function MyLikes() {

  const [type, setType] = useState("track");
  const [myLikesList, setMyLikesList] = useState([]);;

  const getLikedList = () => {
    if (type == "track") {
      Axios.get('http://localhost:5000/api/interact/track', {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setMyLikesList(response.data)
      })
    } else if (type == "artist") {
      Axios.get('http://localhost:5000/api/interact/artist', {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setMyLikesList(response.data)
      })
    } else if (type == "album") {
      Axios.get('http://localhost:5000/api/interact/album', {headers: {
        Authorization: "Bearer " + ls.get("access_token")
      }}).then((response) => {
        setMyLikesList(response.data)
      })
    }
  };

  return (
    <div className='mylikes'>
      <h1> My Likes </h1>
      <div class="center">
        <button> Refresh </button>
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

      {myLikesList.map((val) => {
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

export default MyLikes;
