import React, { useEffect, useState } from "react";
import Detaillist from "./Detaillist";
import "./Details.css";
import LoadingSpinner from "./Loadingspinner";
const Details = () => {
	const [datas, setDatas] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchSong, setSearchSong] = useState("justin");
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchSong}&page_size=10&page=1&s_track_rating=desc&apikey=35e9faf44615123fa08513d9a98e39c4`
				);
				const data = await res.json();
				console.log(data);
				setDatas(data.message.body.track_list);
				setLoading(false);
				setError(null);
			} catch (err) {
				setError(error);
			}
		};
		fetchData();
	}, [searchSong]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchSong(e.target.name.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<input placeholder="search song" name="name" />
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
