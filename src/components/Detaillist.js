import React, { useState } from "react";
import Track from "./Track";

const Detaillist = (props) => {
	return (
		<>
			<h2 className="heading">List of Music</h2>
			<div className="row">
				{props.datas.map((item) => {
					return (
						<Track key={item.track.track_id} tracks={item.track} />
					);
				})}
			</div>
		</>
	);
};

export default Detaillist;
