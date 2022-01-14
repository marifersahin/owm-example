/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Sun } from "../../../../assets/icons/weather-sun.svg";
import { ReactComponent as Cloud } from "../../../../assets/icons/weather-cloud.svg";

function WeatherItem({ item, onClickHandler, isSelected }) {
  const time = new Date(item.dt_txt);

  const formatDate = (date) => {
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hours}:${minutes}`;
  };

  return (
    <button
      type="button"
      key={item.dt}
      title="Select to see details"
      className={`${
        isSelected
          ? "bg-gray-200 bg-opacity-20 hover:bg-gray-200 hover:bg-opacity-20"
          : "hover:bg-gray-100 hover:bg-opacity-10"
      } flex flex-col items-center px-8 py-4 space-y-8 transition-colors duration-200 ease-in-out rounded  hover:transition-colors`}
      onClick={() => onClickHandler(item)}
    >
      <div className="text-xl text-gray-400 md:text-2xl lg:text-3xl">
        {formatDate(time)}
      </div>
      {item.weather[0].main === "Clear" ? (
        <Sun className="w-12 md:w-16 lg:w-20" />
      ) : (
        <Cloud className="w-12 md:w-16 lg:w-20" />
      )}
      <div className="text-4xl font-bold md:text-5xl lg:text-6xl">
        {Math.floor(item.main.temp - 273.15)}&#176;
      </div>
    </button>
  );
}

WeatherItem.propTypes = {
  item: PropTypes.shape({
    dt_txt: PropTypes.string,
    dt: PropTypes.number,
    main: PropTypes.shape({
      temp: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string,
      })
    ),
  }).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default WeatherItem;
