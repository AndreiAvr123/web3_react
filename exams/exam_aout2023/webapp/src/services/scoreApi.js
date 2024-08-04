import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/scores'

const getAllScores = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const createAScore = newScore => {
    return axios.post(baseUrl, newScore).then(response => response.data)
}

const ScoresAPI = {
    getAllScores,
    createAScore
}

export default ScoresAPI