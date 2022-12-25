import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [trackTitle, setTrackTitle] = useState("");
  const [customerInput, setCustomerInput] = useState("");
  // props.onSearchData(trackTitle);
  const handleChange = (e) => {
    setTrackTitle(e.target.value);
  };
  const handleTrack = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=35e9faf44615123fa08513d9a98e39c4`
      )
      .then((res) => {
        let trackdata = res.data.message.body.track_list;
        setTrackTitle(trackdata);
        console.log(trackdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="search Lyrics.."
          name="trackTitle"
          value={trackTitle}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
