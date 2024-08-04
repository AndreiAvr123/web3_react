import axios from 'axios'
const baseUrl = 'http://localhost:3000/famous-jokes'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const update = (id, newObject) => {
    return axios.patch(`${baseUrl}/${id}`, newObject).then(response => response.data);
}

const JokeAPI = {
    getAll,
    update,
}

export default JokeAPI