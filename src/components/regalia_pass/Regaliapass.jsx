import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import getPass from '../../Api/Api'
import Loading from '../Loading/Loading'


const Regaliapass = () => {
    let params = useParams()
    const [data,setdata] = useState({})
    const [loading,setloading] = useState(false)
    useEffect(()=>{
       setloading(true)
        try{
            const passdata = async()=>{
              const pdata = await getPass(params.id)
              setdata(pdata)
              setloading(false)
            }
            passdata()
            console.log(data);
        }
        catch(err){
          console.log(err);
          setloading(false)
        }
    },[])
    return (
    loading ? <Loading/>:<div>Regaliapass</div>
  )
}

export default Regaliapass