import axios, { AxiosRequestConfig } from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const searchLocation = async (
  searchtext: string,
  options?: AxiosRequestConfig
) => {
  return axios
    .get(apiUrl + "/locations/search/", {
      params: {
        query: searchtext,
        ...options,
      },
    })
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getWeatherForecastById = async (
  id: string,
  options?: AxiosRequestConfig
) => {
  return axios
    .get(apiUrl + `/locations/${id}`, options)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
