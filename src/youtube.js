import axios from "axios";

export const API_KEY = "AIzaSyCXJtdzAu-SvhZQXt24wjabo3sQ_a3lWvI";
export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/"
});
