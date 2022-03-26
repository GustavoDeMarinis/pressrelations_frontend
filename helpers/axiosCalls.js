import axios from "axios";

const AXIOSURL = "http://localho.st:4000";

export const axiosGet = (url) => {
  return axios.get(`${AXIOSURL}${url}`);
};

export const axiosGetById = (url, id) => {
  return axios.get(`${AXIOSURL}${url}/${id}`);
};

export const axiosPost = (url, values) => {
  return axios.post(`${AXIOSURL}${url}`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosUpdate = (url, id, values) => {
  return axios.put(`${AXIOSURL}${url}/${id}`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosDelete = (url, id) => {
  console.log(id);
  return axios.delete(`${AXIOSURL}${url}/${id}`);
};
