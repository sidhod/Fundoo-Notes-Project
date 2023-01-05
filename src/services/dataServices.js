import axios from "axios";
const headerConfig = {
    headers: { Authorization: `bearer ${localStorage.getItem('token')}` }
}
export const createNoteApi = (noteObj) => {
    let response = axios.post("http://localhost:4000/api/v1/notes", noteObj, headerConfig)
    return response;
}
export const getNoteApi = () => {
    let response = axios.get("http://localhost:4000/api/v1/notes", headerConfig)
    return response;
}
export const updateColorApi = (id, noteObj) => {
    let response = axios.put(`http://localhost:4000/api/v1/notes/${id}`, noteObj, headerConfig)
    return response;
}
export const isArchivedApi = (id) => {
    let response = axios.put(`http://localhost:4000/api/v1/notes/${id}/archived`, id, headerConfig)
    return response;
}
export const isDeleteApi = (id) => {
    let response = axios.put(`http://localhost:4000/api/v1/notes/${id}/trash`, id, headerConfig)
    return response;
}