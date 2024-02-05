const express = require("express");
const cors = require("cors");
const axios = require("axios");

// base api url with api key
const BASE_API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `${BASE_API_URL}?api_key=${API_KEY}`;

// Create express server
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
});

app.get("/api/nasa-apod", (req, res) => {
  async function getApod(normalizedDate) {
    const url = `${API_URL}&date=${normalizedDate}`;
    try {
      const config = {
        method: "GET",
        url: url,
      };
      const data = await axios(config).then((res) => res.data);
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  }

  const normalizedDate = req.query.normalizedDate; // get params from frontend
  getApod(normalizedDate);
});

module.exports = app;
