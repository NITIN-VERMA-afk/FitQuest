import axios from "axios";

const httpCommon = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/exercises?muscle=",
  headers: {
    "x-api-key": "En3n2oe8ZkK7fT2piUeaaA==kIIuwkEFGuibIiRy",
    "content-type": "application/json",
  },
  
});

export default httpCommon;
