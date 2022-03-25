import axios from "axios";

const AXIOSURL = "http://localhost:4000";

export const axiosGet = async (setState, url) => {
  await axios.get(`${AXIOSURL}${url}`).then((response) => {
    setState(response.data.data);
  });
};

export const axiosPost = async (url) => {
  await axios.post(`${AXIOSURL}${url}`);
};

export const axiosDelete = async (url) => {
  await axios.delete(`${AXIOSURL}${url}`);
};

export const axiosUpdate = async (url) => {
  await axios.put(`${AXIOSURL}${url}`);
};
