import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  return (
    <>
      <br />
      <div className="text-center">
        <h1 className="display-4">The Joel Hilton Film Collection</h1>
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton's face"></img>
      </div>
    </>
  );
}

export default Welcome;
