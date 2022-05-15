import React from "react";
import { useNavigate } from "react-router-dom";
import header from '../../assets/header.png'
import guitar from '../../assets/guitar.png'
import './Homepage.style.css'

const Homepage = () => {

  let navigate = useNavigate();
  const goToScan = () =>{
    let path = `/scan`;
    navigate(path);
  }

  return (
    <div className="homepage">
        <div className="head">
            <img src={header} alt="regalia logo" />
        </div>
        <div className="btn-container">
            <button className='btn-homepage' onClick={goToScan}>
                SCAN PASS
            </button>
            <button className='btn-homepage manual-entry'>
                MANUAL ENTRY
            </button>
        </div>
        <img src={guitar} alt="" className="guitar" />
    </div>
  )
}

export default Homepage
