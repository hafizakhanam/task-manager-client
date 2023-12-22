import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-manager-server-neon.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;