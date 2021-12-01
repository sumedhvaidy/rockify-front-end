import React, {useState, useEffect} from "react";
import Axios from 'axios';

function MyLikes() {

  const [myLikesList, setMyLikesList] = useState([]);;

  const getLikedList = () => {
    Axios.get('http://localhost:5000/api/likes').then((response) => {
      setMyLikesList(response.data)
    })
  };

  return (
    <div className='mylikes'>
      <h1> My Likes </h1>
      <div class="center">
        <button> Refresh </button>
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

      {myLikesList.map((val) => {
          return (
            <div className = "card">
              <h3> {val.item}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default MyLikes;
