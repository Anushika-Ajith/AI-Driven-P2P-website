import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000",
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
});

export default instance;