import axios from "axios";
const Base = process.env.REACT_APP_BASE_URL
const Token = process.env.REACT_APP_TOKEN

const getPass = async(id) => {
    const pass = await axios.get( Base+'scan/'+id , { headers: {"Authorization" :`Bearer ${Token}`} })
    return pass.data
}

export default getPass