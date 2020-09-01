import axios from 'axios'


const elasticInstance = axios.create({
    baseURL: ' http://localhost:9200/training-nlp/'
})


export default elasticInstance;