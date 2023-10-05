import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const credentials = JSON.parse(localStorage.getItem("credentials"))

    const refresh = async () => {
        const response = await axios.post(`/api/User/login`, {
            
            username: credentials.username,
            password: credentials.password
              }, {
                withCredentials: true
            })
        setAuth(prev => {
            console.log(response.data.token);
            console.log(`previous ${prev}`)
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.token
            }
        });
        return response.data.token;
    }
    return refresh;
};

export default useRefreshToken;