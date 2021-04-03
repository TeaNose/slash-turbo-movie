import axios from 'axios';

const instance = axios.create({
  timeout: 60000,
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});

export const post = async (url: string, data: any) => {
  try {
    const response = await instance({
      method: 'POST',
      url: url,
      data,
    });
    if (response.data) {
      return response.data;
    } else {
      throw response;
    }
  } catch (err) {
    // Handle Error Here
    throw err;
  }
};

export const get = async (url: string, params?: any) => {
  try {
    const response = await instance({
      method: 'GET',
      url: url,
      params,
    });
    if (response.data) {
      return response.data;
    } else {
      throw response;
    }
  } catch (err) {
    // Handle Error Here
    throw err;
  }
};
