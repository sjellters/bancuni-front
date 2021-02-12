import axios from 'axios';

const BASE_URl = 'http://127.0.0.1:3000/api/v1/';

const axiosInstance = (headers) => {
  let instance = axios.create({
    BASE_URl,
    headers,
  });

  return instance;
};

const Get = async (route, params = {}, headers = {}) => {
  try {
    const { data } = await axiosInstance(headers).get(route, {
      params,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const Post = async (route, body = {}, headers = {}) => {
  try {
    const { data } = await axiosInstance(headers).post(route, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export { Get, Post };
