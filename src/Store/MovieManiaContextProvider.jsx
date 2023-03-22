import { createContext, useState } from "react";
import axios from "axios";
export const MoviesContext = createContext();

export default function MovieContextProvider(props) {
  const [data, setData] = useState([]);

  const apiURL = "https://www.omdbapi.com/?t&apikey=2599a2b8&s=";

  const getSearch = async () => {
    if (data) return { result: "Done", data: data };
  };

  const getMovies = async (value) => {
    try {
      var res = await axios.get(`${apiURL}/${value}`);
      if (res) setData(res);
      else return { result: "Done", message: "Internal Server Error" };
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        getMovies: getMovies,
        getSearch: getSearch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
