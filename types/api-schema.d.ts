import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from "axios";

declare namespace api {
  type KanyeQuote = {
    quote: string;
  };
  interface Request extends AxiosRequestConfig {
    url: "https://api.kanye.rest";
    method: "GET";
  }
  interface Response extends AxiosResponse<KanyeQuote> {}
}

export default api;
