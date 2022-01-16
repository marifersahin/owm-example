/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherList from "./WeatherList";

const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "http://samples.openweathermap.org/data/2.5/forecast";
const queryParams = {
  q: "M%C3%BCnchen,DE",
  appid: "b6907d289e10d714a6e88b30761fae22",
};

function WeatherPanel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataError, setDataError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(CORS_URL + API_URL, {
        params: queryParams,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setDataError(error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-[#262A59] text-gray-100 font-sans antialiased flex flex-col">
      {dataError ? (
        <div className="p-16 text-4xl font-bold text-center">
          Error: {JSON.stringify(dataError.message)}
        </div>
      ) : isLoading ? (
        <div className="p-16 text-4xl font-bold text-center">
          Loading Weather Data...
        </div>
      ) : (
        <WeatherList data={data} />
      )}
    </main>
  );
}

export default WeatherPanel;
