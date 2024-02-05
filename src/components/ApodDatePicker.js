import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { normalize } from "../utils/dateUtils.js";

export default function ApodDatePicker({ selectedDate, setDate }) {
  const valid = (clickedDate) => {
    const sameDayClicked = normalize(clickedDate) === normalize(selectedDate);
    const futureDayClicked = clickedDate > new Date();
    return !sameDayClicked && !futureDayClicked;
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => valid(date) && setDate(date)}
    ></DatePicker>
  );
}
