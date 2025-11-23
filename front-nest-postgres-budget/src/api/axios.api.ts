// http: //localehost:5000/api/

import axios from "axios";
import { getTokenFromLocalstorage } from "../helpers/localstarage.helper";

export const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: "Bearer " + getTokenFromLocalstorage() || "",
  },
});
