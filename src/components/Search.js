import React, { useState, useEffect } from "react";

const Search = (props) => {
	const [searchText, setSearchText] = useState("");
	const handleChange = (e) => {
		setSearchText(e.target.value);
	};
	useEffect(() => {
		props.onSearch(searchText);
	}, [searchText]);

	return (
		<>
			<input
				type="text"
				placeholder="search Lyrics .."
				value={searchText}
				onChange={handleChange}
			/>
		</>
	);
};

export default Search;
