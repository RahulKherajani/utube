import axios from "axios";

const KEY = "AIzaSyDvMXNryA2AuLlTOA8Sh8ZlCLPp-nNSLPs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
