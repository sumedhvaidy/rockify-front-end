import React, {useState, useEffect} from "react";
import Axios from 'axios';
import ls, {get, set} from "local-storage";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //

  const sendLogin = () => {
    Axios.post('http://localhost:5000/api/login', {
      username: username,
      password: password
    }).then(response => {
      if (response.status == 200) {
        ls.set("access_token", response.data.access_token)
        alert('Login Successful')
      }
    }).catch(error => {
      alert('Login Failed')
    })  }

  return (
    <div className="login">
      <div class="center">
        <h1> Login </h1>
      </div>
      <div class="center">
        <label>Username: &nbsp; </label>
        <input type="text" name = "username" onChange = {(e) => {
          setUsername(e.target.value)
        }}/>
      </div>
      <br></br>
      <div class="center">
        <label>Password: &nbsp; </label>
        <input type="password" name = "password" onChange = {(e) => {
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
