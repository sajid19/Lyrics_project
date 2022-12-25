import React from "react";
// import Details from "./Details";
import Track from "./Track";
import Search from "./Search";

const Detaillist = (props) => {
  const { trackTitle } = props;
  console.log(trackTitle);
  //   console.log(props.datas);
  //   const { track_list } = props.value;
  //   console.log(track_list);
  //   console.log(props);
  return (
    <>
      <Search />
      <h2 className="heading">List of Music</h2>
      <div className="row">
        {props.datas.map((item) => {
          return <Track key={item.track.track_id} tracks={item.track} />;
        })}
      </div>
    </>
  );
};

export default Detaillist;
