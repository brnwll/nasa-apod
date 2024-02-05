import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { normalize } from "../utils/dateUtils.js";
import "./ApodDatePicker.css";

export default function ApodDatePicker({ selectedDate, setDate }) {
  const valid = (clickedDate) => {
    const sameDayClicked = normalize(clickedDate) === normalize(selectedDate);
    const futureDayClicked = clickedDate > new Date();
    return !sameDayClicked && !futureDayClicked;
  };

  return (
    <div id="apod-date-picker-wrapper">
      <DatePicker
        id="apod-date-picker"
        selected={selectedDate}
        onChange={(date) => valid(date) && setDate(date)}
      >
        Test
      </DatePicker>
    </div>
  );
}
