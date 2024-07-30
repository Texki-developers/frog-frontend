import axios from "axios";

class AuthApiService {
  static instance = axios.create({
    baseURL: 'http://localhost:5200/v2/',
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  static async postApi(url, body) {
    try {
      const response = await AuthApiService.instance.post(
        url,
        JSON.stringify(body)
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return {
        message: error?.response?.data?.message ?? "Something went wrong",
        status: "error",
      };
    }
  }

  static async postApiFormData(url, formData) {
    try {
      const response = await AuthApiService.instance.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error posting to API:", error);
      return {
        message: error?.response?.data?.message ?? "Something went wrong",
        status: "error",
      };
    }
  }

  static async getApi(url) {
    try {
      const response = await AuthApiService.instance.get(url);
      return response.data;
    } catch (error) {
      console.error("Error posting to API:", error.message);
      return {
        message: error?.response?.data?.message ?? "Something went wrong",
        status: "error",
      };
    }
  }
}

export default AuthApiService;
