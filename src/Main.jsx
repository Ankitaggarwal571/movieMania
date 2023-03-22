import React, { useState, useContext, useEffect } from "react";
import Apperence from "./Apperence";
import Navbar from "./Navbar";

import { MoviesContext } from "./Store/MovieManiaContextProvider";

function Main() {
  var { getSearch} = useContext(MoviesContext);
  const [data, setData] = useState([]);

  const getApiData = async () => {
    let res = await getSearch();
    if(res.data.data){
      setData(res.data.data.Search)
    }
  };

  useEffect(() => {
    getApiData();
  }, [getSearch]);

  return (
    <>
      <Navbar />
      <Apperence data={data} />
    </>
  );
}
export default Main;
