import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res =>
        res.data
    )
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res=>res.data)
}

const delPerson = personId =>{
    const request = axios.delete(`${baseUrl}/${personId}`)
    return request.then(res=>{
        console.log(res)
        return res.data
    })
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(res => res.data)
}

// eslint-disable-next-line
export default {getAll, create, delPerson, update}