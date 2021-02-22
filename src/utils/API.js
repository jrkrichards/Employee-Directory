import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=15";
// const APIKEY = "&apikey=trilogy";

export default {
  start: function() {
    return axios.get(BASEURL);
  }
};
