import React, { useEffect, useState } from "react";
import Detaillist from "./Detaillist";
import LoadingSpinner from "./Loadingspinner";

const Details = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=35e9faf44615123fa08513d9a98e39c4"
        );
        const data = await res.json();
        // console.log(data);
        setDatas(data.message.body.track_list);
        // console.log(data.message.body.track_list);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  // {datas && <Detaillist datas={datas} />}
  return (
    <>
      {isLoading ? <LoadingSpinner /> : datas && <Detaillist datas={datas} />}
    </>
  );
};

export default Details;
