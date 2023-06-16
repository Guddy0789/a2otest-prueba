import axios from 'axios'

export const sendString = (stringT)=>{
    return axios.post('http://localhost:8000/a2o/backend/apis/',stringT)
                        
}