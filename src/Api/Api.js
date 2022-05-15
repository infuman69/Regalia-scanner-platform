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
const patchVerify = (id,count) => {
    console.log(Base + 'verify/' + id + '?count_of_bands=' + count.toString())
    return Promise.resolve(axios.patch(Base + 'verify/' + id + '?count_of_bands=' + count,{ headers:{"Authorization" :`Bearer ${Token}`}} ))
}

export {getPass,patchVerify}
