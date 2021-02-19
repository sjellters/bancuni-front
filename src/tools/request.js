import axios from 'axios';

const BASE_URl = 'https://bankuni-core.herokuapp.com';

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
