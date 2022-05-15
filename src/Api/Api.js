import axios from "axios";
const Base = process.env.REACT_APP_BASE_URL
const Token = process.env.REACT_APP_TOKEN

const getPass = (id) => {
    return Promise.resolve(axios.get(Base+'scan/'+id , { headers: {"Authorization" :`Bearer ${Token}`} }))
}
export default getPass