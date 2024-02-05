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

// serverless function to fetch the Astronomy Photo Of The Day
const FETCH_APOD_URL = "https://nasa-apod-five.vercel.app/api/nasa-apod";

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(new Date());
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

    axios(config)
      .then((res) => {
        setData(res.data);
        setFetchingData(false);
      })
      .catch((err) => {
        // TODO: Add a modal indicating that no image was present for date
        // and set a default image
        console.error(err);
      });
  }, [date]);

  return (
    <StyledApp>
      <ApodDatePicker selectedDate={date} setDate={setDate}></ApodDatePicker>
      <ApodContainer data={data} fetchingData={fetchingData}></ApodContainer>
    </StyledApp>
  );
}

export default App;
