import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Showlyrics from "./Showlyrics";
import LoadingSpinner from "../Loadingspinner";

const Lyrics = () => {
	const [track, setTrack] = useState({});
	const [lyrics, setlyrics] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const params = useParams();
	useEffect(() => {
		const fetchLyrics = async () => {
			try {
				const res = await fetch(
					`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${params.id}&apikey=35e9faf44615123fa08513d9a98e39c4`
				);
				const data = await res.json();
				setlyrics(data.message.body.lyrics);
				setLoading(false);
				setError(null);
				return axios
					.get(
						`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${params.id}&apikey=35e9faf44615123fa08513d9a98e39c4`
					)
					.then((res) => {
						let track = res.data.message.body.track;
						setTrack(track);
					});
			} catch (err) {
				setError(error);
			}
		};

		fetchLyrics();
	}, [params.id]);
	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				track && lyrics && <Showlyrics track={track} lyrics={lyrics} />
			)}
		</>
	);
};

export default Lyrics;
