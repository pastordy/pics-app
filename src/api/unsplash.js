import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6K0fjVqRcTMwHCz85a11Ye_k8lV5RJgth8WeunqvXi4",
  },
});
