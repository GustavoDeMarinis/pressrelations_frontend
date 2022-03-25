import axios from "axios";

const AXIOSURL = "http://localho.st:4000";

export const axiosGet = async (url, setState) => {
  await axios.get(`${AXIOSURL}${url}`).then((response) => {
    setState(response.data.data);
  });
};

export const axiosPost = async (url, values) => {
  await axios.post(`${AXIOSURL}${url}`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosUpdate = async (url, values) => {
  await axios.put(`${AXIOSURL}${url}`);
};

export const axiosDelete = async (url) => {
  await axios.delete(`${AXIOSURL}${url}`);
};
