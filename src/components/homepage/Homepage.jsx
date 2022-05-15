import React from "react";
import header from '../../assets/header.png'
import guitar from '../../assets/guitar.png'
import './Homepage.style.css'
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
        <div className="head">
            <img src={header} alt="regalia logo" />
        </div>
        <div className="btn-container">
            <Link to="/scan"><button className='btn-homepage'>
                SCAN PASS
            </button></Link>
            <button className='btn-homepage manual-entry'>
                MANUAL ENTRY
            </button>
        </div>
        <img src={guitar} alt="" className="guitar" />
    </div>
  )
}

export default Homepage
