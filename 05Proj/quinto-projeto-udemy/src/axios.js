import axios from "axios";

const Instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

Instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default Instance;