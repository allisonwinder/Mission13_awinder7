import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Podcast from "./PodcastInfo";
import MovieList from "./Movies";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/podcast" className="nav-link text-light">
              Podcast
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link text-light">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
