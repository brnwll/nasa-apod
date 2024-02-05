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
  const FETCH_APOD_URL = "https://nasa-apod-five.vercel.app/api/nasa-apod";
  const [data, setData] = useState(null);
  const [date, setDate] = useState(new Date());
  // track fetching to display user feedback when changing the date
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    setFetchingData(true);

    const config = {
      method: "GET",
      url: FETCH_APOD_URL,
      params: {
        normalizedDate: normalize(date),
      },
    };

    console.log(config);

    axios(config)
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
  }, [date]);

  // const fetchYesterday = () => {
  //   let yesterday = new Date();
  //   yesterday.setDate(new Date().getDate() - 1);
  //   setDate(yesterday);
  // };

  return (
    <StyledApp>
      <ApodDatePicker selectedDate={date} setDate={setDate}></ApodDatePicker>
      <ApodContainer data={data} fetchingData={fetchingData}></ApodContainer>
    </StyledApp>
  );
}

export default App;
