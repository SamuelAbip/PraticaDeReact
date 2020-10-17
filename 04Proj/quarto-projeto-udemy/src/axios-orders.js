import axios from "axios";

const Instance = axios.create({
  baseURL: "https://react-my-burger-a542f.firebaseio.com/"
});

export default Instance;