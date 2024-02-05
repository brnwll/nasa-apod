import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ApodDatePicker from "./ApodDatePicker";
import ApodContainer from "./ApodContainer";
import { normalize } from "../utils/dateUtils.js";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
`;

function App() {
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=TODO`;
  const [data, setData] = useState(null);
  const [date, setDate] = useState(new Date());
  // track fetching to display user feedback when changing the date
  const [fetchingData, setFetchingData] = useState(true);

  const fetchData = (url = API_URL) => {
    // TODO: Handle x-ratelimit-limit exceeded
    setFetchingData(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setFetchingData(false);
      })
      .catch((err) => {
        // at 12am the api is not updated immediately, resulting in 404, so...
        //fetchYesterday();
        //alert(
        //  `The selected date does not have an Astonomy Photo Of The Day. Displaying latest photo.`
        //);
        console.error(err);
      });
  };

  useEffect(() => {
    const api = `${API_URL}&date=${normalize(date)}`; // append &date=YYYY-MM-DD
    fetchData(api);
  }, [date]);

  const fetchYesterday = () => {
    let yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);
    setDate(yesterday);
  };

  return (
    <StyledApp>
      <ApodDatePicker selectedDate={date} setDate={setDate}></ApodDatePicker>
      <ApodContainer data={data} fetchingData={fetchingData}></ApodContainer>
    </StyledApp>
  );
}

export default App;
