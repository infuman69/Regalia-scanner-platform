import axios from "axios";
const Base = process.env.REACT_APP_BASE_URL
const Token = process.env.REACT_APP_TOKEN

const getPass = (id, history) => {
    var response = axios.get( Base+'scan/'+id , { headers: {"Authorization" :`Bearer ${Token}`} });
    return Promise.resolve(response).catch((err) => {
        console.log(err)
        return ({"status": 401})
    })
}

export default getPass
