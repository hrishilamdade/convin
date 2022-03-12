import axios from 'axios'

const API_URL = "https://reqres.in/"

const getAllUsers = () => {
    return axios.get(API_URL + 'api/users?page=1')
}

const getUser = (user_id) =>{
    return axios.get(API_URL + `api/users/${user_id}`)
}
const UsersService = {
    getAllUsers,
    getUser
};

export default UsersService;