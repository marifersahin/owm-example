/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import PropTypes from "prop-types";
import WeatherItem from "./WeatherItem";
import SelectedWeatherItem from "./SelectedWeatherItem";

function WeatherList({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { list } = data;

  const onClickHandler = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex items-center justify-center flex-1">
        {selectedItem ? (
          <SelectedWeatherItem item={selectedItem} />
        ) : (
          <div className="text-xl">
            Please select an hour from the list below to see the details.
          </div>
        )}
      </div>
      <div className="flex px-4 py-8 space-x-4 overflow-x-auto">
        {list?.map((item) => (
          <WeatherItem
            key={item.dt}
            item={item}
            onClickHandler={onClickHandler}
            isSelected={selectedItem?.dt === item.dt}
          />
        ))}
      </div>
    </div>
  );
}

WeatherList.propTypes = {
  data: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.number,
      })
    ),
  }),
};

WeatherList.defaultProps = {
  data: {},
};

export default WeatherList;
