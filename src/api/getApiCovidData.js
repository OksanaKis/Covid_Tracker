import axios from "axios";

export const getApiCovidData = async () => {
  const response = await axios.get("https://api.covid19api.com/summary");
  return response;
};