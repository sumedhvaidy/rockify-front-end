import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Login,
  MyLikes,
  Recommend,
  Search
} from "./pages";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/mylikes" element={<MyLikes />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
