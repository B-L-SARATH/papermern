import axios from "axios";
import { getLocalStorage } from "./authorization";

export const instance = axios.create({
  baseURL: "https://papermernbackend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: getLocalStorage("token") ? getLocalStorage("token") : " ",
  },
});
// console.log("token", instance.defaults.headers.Authorization);
export const api = async (method = "", url = "", body = "") => {
  try {
    const response = await instance[method](url, body);
    const result = response.data;
    return result;
  } catch (err) {
    return err.message;
  }
};
