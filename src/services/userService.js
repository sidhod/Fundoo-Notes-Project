import axios from "axios";
export const loginApi = (loginObj) => {
    let response = axios.post("http://localhost:3000/api/v1/users/logins", loginObj)
    return response;
}
export const registerApi = (registerObj) => {
    let response = axios.post("http://localhost:3000/api/v1/users/register", registerObj)
    return response;
}