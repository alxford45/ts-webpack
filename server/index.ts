import express from "express";
import axios from "axios";

import api from "types/api-schema";

const app = express();

app.get("/api", async (_, res) => {
  const options: api.Request = {
    url: "https://api.kanye.rest",
    method: "GET"
  };
  const response: api.Response = await axios(options);
  const data: api.KanyeQuote = response.data;

  res.send(data);
});

const port: number = 3000;

app.listen(port, () => {
  console.log(`Now listening on Port ${port}`);
});
