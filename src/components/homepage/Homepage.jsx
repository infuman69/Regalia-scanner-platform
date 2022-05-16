import React, { useState } from "react";
import header from '../../assets/header.png'
import guitar from '../../assets/guitar.png'
import './Homepage.style.css'
import { useHistory } from "react-router-dom";
import Modal from "../Modals/Modal/Modal";
import Uniqueid from "../Modals/Uniqueid/Uniqueid";


const Homepage = () => {
  let history =useHistory()
  const [isOpen,setisOpen] = useState(false)
  const goToScan = () =>{
    history.push('/scan')
  }
  const handleClick = () => {
    setisOpen(true)
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
            <button className='btn-homepage manual-entry' onClick={handleClick}>
                MANUAL ENTRY
            </button>
        </div>
        <img src={guitar} alt="" className="guitar" />
        <Modal open={isOpen} onClose={() => setisOpen(false)}>
          <Uniqueid/>
        </Modal>
    </div>
  )
}

export default Homepage
