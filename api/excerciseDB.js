import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

export const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchExercisesByBodyParts = async (bodyPart) => {
  const url = `${baseUrl}/exercises/bodyPart/${bodyPart}`;
  let data = await apiCall(url, {
    limit: "10",
    offset: "0",
  });
  return data;
};
