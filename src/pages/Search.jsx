import React, {useState, useEffect} from "react";
import Axios from 'axios';

function Search() {

  const [searchFor, setSearchFor] = useState("");
  const [type, setType] = useState("track");
  const [searchList, setSearchList] = useState([]);

  const search = () => {
    Axios.get('http://localhost:5000/api/search', {params: {
      searchFor: searchFor,
      type: type
    }}).then((response) => {
      setSearchList(response.data)
    })
  };

  const showAdvancedSearch = () => {
    alert("Test!")
    document.getElementById('advancedSearchOptions').style.display = "block"
  }

  return (
		<div className='search'>
	    <h1> Search for a track, artist, or album </h1>
      <div class="center">
  	    <input type="text" placeholder="Search..."/>
  	    <button onClick={search}> Search </button>
      </div>
	    <br></br>
      <div class="center">
        <input type="radio" id="Track" name="type" onClick = {(e) => {
          setType("track")
        }}/>
        <label> Track </label>
        <input type="radio" id="artist" name="type" onClick = {(e) => {
          setType("artist")
        }}/>
        <label> Artist </label>
        <input type="radio" id="Album" name="type" onClick = {(e) => {
          setType("album")
        }}/>
        <label> Album </label>
      </div>

      {searchList.map((val) => {
          return (
            <div className = "card">
              <h3> {val.item}</h3>
            </div>
          );
        })}
	  </div>
  );
}

export default Search;
