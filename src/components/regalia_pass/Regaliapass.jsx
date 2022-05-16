import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  { getPass,patchVerify } from "../../Api/Api";
import Loading from "../Loading/Loading";
import './Regalia_pass.style.css';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


const Regaliapass = () => {
  let params = useParams();

  const [data, setdata] = useState({});
  const [count, setCount] = useState(1);
  const [loading, setloading] = useState(false);

  let history = useHistory()

  useEffect(() => {
    setloading(true);
    const fetchData = () => {
      try {
         getPass(params.id).then((pdata)=>{
          if(pdata['status'] === 0){
            toast.error(`${pdata['messsage']}`)
            console.log(pdata['message']);
            history.push('/')
            
          }
          setdata(pdata.data)
          setloading(false)
        })
      }
      catch (err) {
        console.log(err);
        setloading(false);
      }
    };
    fetchData();
  }, [history, params.id]);

  const increment_func = () => {
    setCount((count) => ((count === 3 || count === data.allowed) ? count : count + 1));
  };

  const decrement_func = () => {
    setCount((count) => (count === 1 ? 1 : count - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      patchVerify(params.id,count).then((pdata) => {

        console.log(pdata);

        if(pdata.status === 200) {
          toast.success('Success', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setTimeout(() => history.replace('/'), 1500)
        }

        else if (pdata['status'] === 0) {
          toast.error(`${pdata['messsage']}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          // setTimeout(() => history.replace('/'), 1500)
          history.replace('/')
        }
      }).catch((err) => {console.log(err)})
    }

    catch(err){
      toast.error('error', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log(err);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="regalia-pass-content">
      <div className="regalia-pass">
        <div className="allowed-heading">
          <p className="font-style-head">{data.allowed} allowed</p>
        </div>
        <div className="border-dashed"></div>
        <div className="name-email-roll">
          <div className="name-email-roll-padding">
            <p className="font-style-head name">{data.name}</p>
            <p className="font-style">{data.email}</p>
            <p className="font-style">{data.roll_number}</p>
          </div>
        </div>
      </div>
      <div className="number-of-bands-section">
        <button onClick={increment_func} className="increment-decrement">
          <AiOutlinePlus />
        </button>
        <div className="count-of-bands">{count}</div>
        <button onClick={decrement_func} className="increment-decrement">
          <AiOutlineMinus />
        </button>
      </div>
      <div className="submit-btn-section">
        <button
          className="submit-btn"
          type="submit"
          onClick={(e) => {handleSubmit(e)}}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Regaliapass;
