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
      <h1> My Likes <button> Refresh </button> </h1>

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
