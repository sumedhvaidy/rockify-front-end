import React, {useState, useEffect} from "react";
import Axios from 'axios';

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendRegister = () => {
    Axios.post('http://localhost:5000/api/register', {
      username: username,
      password: password
    }).then(() => {
      alert('Registration Successful')
    })  }

  return (
    <div className="register">
      <div class="center">
        <h1> Register </h1>
      </div>
      <div class="center">
        <label>Username: </label>
        <input type="text" name = "username" onChange = {(e) => {
          setUsername(e.target.value)
        }}/>
      </div>
      <br></br>
      <div class="center">
        <label>Password: </label>
        <input type="text" name = "password" onChange = {(e) => {
          setPassword(e.target.value)
        }}/>
      </div>
      <br></br>
      <div class="center">
        <button onClick={sendRegister}> Submit </button>
      </div>

    </div>
  );
}

export default Register;
