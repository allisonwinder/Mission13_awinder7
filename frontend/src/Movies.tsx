import { useState } from "react";
import data from "./MovieData.json";

const mds = data.MovieData;

function MovieList() {
  const [ListOMovies] = useState(mds);

  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <table className="table">
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
