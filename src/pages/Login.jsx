import React, {useState, useEffect} from "react";
import Axios from 'axios';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendLogin = () => {
    Axios.post('http://localhost:5000/api/login', {
      username: username,
      password: password
    }).then(() => {
      alert('Login Successful')
    })  }

  return (
    <div className="login">
      <div class="center">
        <h1> Login </h1>
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
        <button onClick={sendLogin}> Submit </button>
      </div>

    </div>
  );
}

export default Login;
