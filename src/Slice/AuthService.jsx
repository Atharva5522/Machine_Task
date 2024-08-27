import { data } from "autoprefixer"
import axios from "axios"

const API_URL = "/api/user/"

// register
const register = async(formData) => {
    const response = await axios.post(API_URL + "/register" , formData)
    return response.data
}

// login
const signin = async(login) => {
    const response = await axios.post(API_URL + "/login" , login)
    return response,data
}

const authService = {
    register : register,
    login : signin
}

export default authService