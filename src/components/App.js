import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ApodDatePicker from "./ApodDatePicker";
import ApodContainer from "./ApodContainer";
import { normalize } from "../utils/dateUtils.js";
import { cssStars } from "../utils/cssUtils.js";
import defaultImage from "../images/default.jpg";
import nasaLogo from "../images/nasa-logo.png";
import "./App.css";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
  ${cssStars(50)}
`;

// serverless function to fetch the Astronomy Photo Of The Day
const FETCH_APOD_URL = "https://nasa-apod-five.vercel.app/api/nasa-apod";

// display when there is an error fetching the data
const defaultData = {
  url: defaultImage,
  title: "Missing image",
  media_type: "image",
  copyright: "",
  explanation: "This is a default image",
};

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
        setData(defaultData);
        setFetchingData(false);
      });
  }, [date]);

  return (
    <StyledApp>
      <header>
        <img src={nasaLogo} alt="NASA logo" />
        <h1>Astronomy Photo of the Day</h1>
      </header>
      <ApodDatePicker selectedDate={date} setDate={setDate}></ApodDatePicker>
      <ApodContainer data={data} fetchingData={fetchingData}></ApodContainer>
      <footer>
        <p>
          Made by{" "}
          <a href="https://github.com/brnwll" target="_blank" rel="noreferrer">
            @brnwll
          </a>
        </p>
        <p>
          Data provided by{" "}
          <a
            href="https://apod.nasa.gov/apod/astropix.html"
            target="_blank"
            rel="noreferrer"
          >
            NASA API
          </a>
        </p>
      </footer>
    </StyledApp>
  );
}

export default App;
