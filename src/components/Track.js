import React from "react";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import AlbumIcon from "@mui/icons-material/Album";
import { Link } from "react-router-dom";

const Track = (props) => {
	const { tracks } = props;
	return (
		<>
			<div className="col-md-6">
				<div className="card mb-4 shadow-sm">
					<div
						className="card-body"
						style={{ backgroundColor: "#BFEAF5" }}
					>
						<h5>{tracks.artist_name}</h5>
						<p className="card-text">
							<AudiotrackIcon /> Track: {tracks.track_name}
						</p>
						<p className="card-text">
							<AlbumIcon /> Album: {tracks.track_name}
						</p>
						<Link
							to={`lyrics/${tracks.track_id}`}
							style={{ color: "white" }}
							className="btn btn-primary"
						>
							View Lyrics
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Track;
