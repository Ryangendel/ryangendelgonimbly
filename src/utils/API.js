import axios from "axios";

const BASEURL = "https://newton.now.sh/api/v2/";

// export default {
//   search: function(search, operation) {
//     return axios.get(BASEURL + search + "/" + operation);
//   }
// };


var APIsearch ={
  search: function(search, operation) {
    return axios.get(BASEURL + search + "/" + operation);
  }
};

export default APIsearch;