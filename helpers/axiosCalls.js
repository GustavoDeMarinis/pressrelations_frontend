import axios from "axios";

const AXIOSURL = "http://localho.st:4000";

export const axiosGet = (endpoint) => {
  return axios.get(`${AXIOSURL}${endpoint}`);
};

export const axiosGetById = (endpoint, id) => {
  return axios.get(`${AXIOSURL}${endpoint}/${id}`);
};

export const axiosPost = (endpoint, values) => {
  return axios.post(`${AXIOSURL}${endpoint}`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosUpdate = (endpoint, id, values) => {
  return axios.put(`${AXIOSURL}${endpoint}/${id}`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosDelete = (endpoint, id) => {
  return axios.delete(`${AXIOSURL}${endpoint}/${id}`);
};
