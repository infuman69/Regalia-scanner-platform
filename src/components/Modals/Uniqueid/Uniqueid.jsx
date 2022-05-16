import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



import './Uniqueid.style.css'
const Uniqueid = () => {
  let history = useHistory()
  const [inputVal,setInputVal]=useState('')
  const handleChange = (e) => {
      setInputVal(e.target.value)
  }
  const handleClick = (e) => {
      e.preventDefault()
      history.push('/'+ inputVal)
      setInputVal('')
  }
  return (
    <div className='uniqueid'>
        <h4>Unique Confirmation Number</h4>
        <input type="text" name="" id="" value={inputVal} onChange={(e) => handleChange(e)}/>
        <div className="btn-uniqueid-container">
            <button type="submit" className='btn-uniqueid' onClick = {(e) => handleClick(e)}
            >CONFIRM</button>
        </div>
    </div>
  )
}

export default Uniqueid