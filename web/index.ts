import axios from "axios";

import api from "types/api-schema";

const $ = document.getElementById("root")!;
const header = document.createElement("h1");
$.appendChild(header);

(async () => {
  const response = (await axios("api")) as api.Response;
  console.log(response);
  header.innerText = response.data.quote;
})();
