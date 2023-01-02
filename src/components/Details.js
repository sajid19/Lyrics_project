import React, { useEffect, useState } from "react";
import Detaillist from "./Detaillist";
import LoadingSpinner from "./Loadingspinner";
import "./Details.css";
const Details = () => {
	const [datas, setDatas] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchSong, setSearchSong] = useState("justin");
	// const [filteredData, setFilteredData] = useState(datas);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchSong}&page_size=10&page=1&s_track_rating=desc&apikey=35e9faf44615123fa08513d9a98e39c4`
				);
				const data = await res.json();
				setDatas(data.message.body.track_list);
				setLoading(false);
				setError(null);
				// console.log(data.message.body.track_list);
			} catch (err) {
				setError(error);
				// setError(error.message);
			}
		};
		fetchData();
	}, [searchSong]);
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e.target.name.value);
		setSearchSong(e.target.name.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<input placeholder="search Song" name="name" />
				<button>search</button>
			</form>

			{isLoading ? (
				<LoadingSpinner />
			) : (
				datas && <Detaillist datas={datas} />
			)}
		</>
	);
};
export default Details;
// {datas && <Detaillist datas={datas} />}
// const handleSearch = (searchValue) => {
//  let value = searchValue.toLowerCase();
//  const newTrack = datas.filter((item) => {
//    const artistName = item.track.artist_name.toLowerCase();
//    return artistName.startsWith(value);
//  });
//  setFilteredData(newTrack);
// };
