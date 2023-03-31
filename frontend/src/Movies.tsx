import { useState } from "react";
import data from "./MovieData.json";
import "bootstrap/dist/css/bootstrap.min.css";

const mds = data.MovieData;

function MovieList() {
  const [ListOMovies] = useState(mds);

  return (
    <>
      <br />
      <div className="text-center">
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {ListOMovies.map((m) => (
            <tr key={m.Title}>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>
                <button className="btn btn-secondary">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
