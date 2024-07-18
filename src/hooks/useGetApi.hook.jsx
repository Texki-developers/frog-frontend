
import AuthApiService from "../services/api-services";
const useGetApis = () => {
  const callApi = async (url) => {
    try {
      const response = await AuthApiService.getApi(url);
      return response;
    } catch (error) {
    console.log(error)
    }
  };
  return { callApi };
};
export default useGetApis;
