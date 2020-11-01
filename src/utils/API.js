import axios from "axios";

const BASEURL = "https://newton.now.sh/api/v2/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(search, operation) {
    return axios.get(BASEURL + search + "/" + operation);
  }
};
