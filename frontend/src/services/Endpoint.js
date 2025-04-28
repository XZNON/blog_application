import axios from "axios";
export const BaseURL = "http://localhost:8000";
//create an axios instance to talk with the backend
const instance = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});

//create the cors endpoints
export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const patch = (url, data) => instance.patch(url, data);
export const del = (url) => instance.delete(url);
