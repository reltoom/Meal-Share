import axios from "axios";

axios.defaults.baseURL = "https://df-api-runthrough-71a53f6c5df9.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;