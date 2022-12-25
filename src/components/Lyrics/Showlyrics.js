import React from "react";
import { Link } from "react-router-dom";

const Showlyrics = (props) => {
  const { track, lyrics } = props;

  return (
    <>
      <Link to="/" className="btn btn-info">
        Go Back
      </Link>
      <div className="card">
        <h4 className="card-header">
          <strong>{track.track_name}</strong> by{" "}
          <span> {track.artist_name}</span>
        </h4>
      </div>
      <div className="card-body">
        <p className="card-text">{lyrics.lyrics_body}</p>
      </div>
    </>
  );
};

export default Showlyrics;
