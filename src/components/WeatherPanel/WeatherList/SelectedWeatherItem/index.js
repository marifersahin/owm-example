/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Sun } from "../../../../assets/icons/weather-sun.svg";
import { ReactComponent as Cloud } from "../../../../assets/icons/weather-cloud.svg";

const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
function SelectedWeatherItem({ item }) {
  const time = new Date(item.dt_txt);

  const formatDate = (date) => date.toLocaleDateString("en-de", options);

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 sm:items-start sm:flex-row md:gap-x-8 lg:gap-x-16">
      <div className="flex flex-col items-center p-4 basis-1/4">
        {item.weather[0].main === "Clear" ? (
          <Sun className="w-32 md:w-48 lg:w-64" />
        ) : (
          <Cloud className="w-32 md:w-48 lg:w-64" />
        )}
      </div>
      <div className="flex flex-col p-4 space-y-4 sm:space-y-8 basis-1/4">
        <div className="flex justify-between space-x-8 text-xl text-gray-400 md:text-2xl lg:text-3xl">
          <span>{item.weather[0].main}</span>
          <span className="truncate">
            {Math.floor(item.main.temp_max - 273.15)}&#176; /{" "}
            {Math.floor(item.main.temp_min - 273.15)}&#176;
          </span>
        </div>
        <div className="text-5xl font-bold text-center md:text-7xl lg:text-9xl">
          {Math.floor(item.main.temp - 273.15)}&#176;
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-4 text-center sm:space-y-8 basis-1/4 sm:text-left">
        <h2 className="text-xl text-gray-400 md:text-2xl lg:text-3xl">
          Munich
        </h2>
        <div className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {formatDate(time)}
        </div>
      </div>
    </div>
  );
}

SelectedWeatherItem.propTypes = {
  item: PropTypes.shape({
    dt_txt: PropTypes.string,
    dt: PropTypes.number,
    main: PropTypes.shape({
      temp: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default SelectedWeatherItem;
