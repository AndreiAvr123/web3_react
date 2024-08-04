import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/jokes'

const getAllJokes = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const JokesAPI = {
    getAllJokes
}

export default JokesAPI