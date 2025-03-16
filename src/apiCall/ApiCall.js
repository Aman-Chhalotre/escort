import axios from "axios";
const api_url = import.meta.env.VITE_API_BASE_URL;
import Cookies from 'js-cookie'

const getAuthHeaders = () => {
  const token = Cookies.get("accessToken");

  return token ? { Authorization: `Bearer ${token}` } : {};
};

export async function AxiosFetch(url) {
  try {
    const response = await axios.get(`${api_url}${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function AxiosPost(url, data, options) {
  try {
    const response = await axios.post(`${api_url}${url}`, data, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function AxiosAdminFetch(url, options = {}) {
  try {
    const response = await axios.get(`${api_url}${url}`, {
        headers: {
          ...getAuthHeaders(),
        },
        withCredentials : true,
      });
    return response.data;
  } catch (error) {
    console.log(error);
    if(error.response && error.response.message == 401){
        window.location.href("/login")
    }
  }
}
export async function AxiosAdminPost(url, data, options= {}) {
  try {
    const response = await axios.put(`${api_url}${url}`, data, {
        ...options, 
        headers: {
          ...getAuthHeaders(), 
        //   ...(options.headers || {}), 
        },
        withCredentials : true,
      });
    return response.data;
  } catch (error) {
    console.log(error);
    if(error.response && error.response.message == 401){
        window.location.href("/login")
    }
  }
}
